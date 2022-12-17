import Image from 'next/image';

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css';

export default function Home({ webinar }) {
  console.log(webinar);
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
            <div className='col-lg-4'>
              <Image
                loader={myLoader}
                src={urlFor(webinar[0].trial_professor_image_1).url()}
                alt='Edward Ciarimboli'
                width={200}
                height={200}
              />
            </div>
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

const builder = imageUrlBuilder(client);

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function urlFor(source) {
  return builder.image(source);
}

export async function getStaticProps() {
  const webinar = await client.fetch(`*[_type == "webinar"]`);

  return {
    props: {
      webinar,
    },
  };
}
