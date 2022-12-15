export default {
    name: 'webinar',
    type: 'document',
    title: 'Webinar',
    fields: [
        {
            name: 'webinar_title',
            type: 'string',
            title: 'Webinar Title'
        },
        {
            name: 'trial_professors',
            type: 'string',
            title: 'Trial Professors'

        },
        {
            name: 'description',
            title: 'Webinar Description',
            type: 'array',
            of:[
                {
                    type:'block',
                    
                },
                {
                    type:'image'
                }
            ]

        },
        
        {
            name:  'trial_professor_image_1',
            type: 'image',
            title: 'Trial Professor #1'
        },
        {
            name:  'trial_professor_image_2',
            type: 'image',
            title: 'Trial Professor #2'
        },
        {
            name:  'trial_professor_image_3',
            type: 'image',
            title: 'Trial Professor #3'
        },
        {
            name:  'trial_professor_image_4',
            type: 'image',
            title: 'Trial Professor #4'
        },
        {
            name:  'trial_professor_image_5',
            type: 'image',
            title: 'Trial Professor #5'
        },
        {
            name: 'time',
            type: 'datetime',
            title: 'time'
        },
        {
            name: 'webinar_register_info',
            title: 'Register Now:',
            type: 'url'
        }
    ]
}