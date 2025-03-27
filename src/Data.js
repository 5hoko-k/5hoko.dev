import JS from './Logos/javascript-svgrepo-com.svg'
import python from './Logos/reshot-icon-python-L432GEZMNS.svg'
import java from './Logos/java-14.svg'
import reactLogo from './Logos/react-2.svg'
import fastAPILogo from './Logos/fastapi-1.svg'
import mysqlLogo from './Logos/mysql-6.svg'
import mongoDBLogo from './Logos/mongodb-icon-1.svg'
import graphQLLogo from './Logos/graphql-logo-2.svg'

export const skills = {
    languages: [ {name: 'JavaScript', logo: JS}, {name: 'Python', logo: python}, {name: 'Java', logo: java} ],
    frameworks: [ {name: 'React', logo: reactLogo}, {name: 'FastAPI', logo: fastAPILogo} ],
    databases: [ {name: 'MySQL', logo: mysqlLogo}, {name: 'MongoDB', logo: mongoDBLogo}, {name: 'GraphQL', logo: graphQLLogo} ]
}

export const projects = [
    { title: '5hoko\'s Anime Archive',
    image: '',
    description: 'A library record of Anime',
    link: 'https://5-aa.vercel.app/' },
    { title: 'Somn1',
    image: '',
    description: 'About that somn',
    link: 'https://www.google.com/' },
    { title: 'Somn2',
    image: '',
    description: 'About that somn',
    link: 'https://www.google.com/' }
]

export const testimonials = [
    {
        name: 'Name 1',
        quote: 'Quote 1',
        image: '/5hoko.jpg',
        company: 'Company 1',
        position: 'Position 1'
    },
    {
        name: 'Name 2',
        quote: 'Quote 2',
        image: '/5hoko.jpg',
        company: 'Company 2',
        position: 'Position 2'
    },
    {
        name: 'Name 3',
        quote: 'Quote 3',
        image: '/5hoko.jpg',
        company: 'Company 3',
        position: 'Position 3'
    }
]