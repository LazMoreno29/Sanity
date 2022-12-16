import { createClient } from 'next-sanity';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

export default function Home({ webinar }) {
  console.log(webinar[0].description[0].children[0].text);
  return (
    <>
      <div className={styles.container}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <h3>{webinar[0].webinar_title}</h3>
            </div>
            <div className='col-lg-4'>
              <h4>{webinar[0].description[0].children[0].text}</h4>
            </div>
            <div className='col-lg-4'>column</div>
          </div>
        </div>
      </div>
    </>
  );
}

const client = createClient({
  projectId: '1zpvkx0l',
  dataset: 'production',
  apiVersion: '2022-12-16',
  useCdn: false,
});

export async function getStaticProps() {
  const webinar = await client.fetch(`*[_type == "webinar"]`);
  console.log(webinar._id);
  return {
    props: {
      webinar,
    },
  };
}
