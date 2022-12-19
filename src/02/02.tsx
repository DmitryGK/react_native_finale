type TechnologiesType = {
    id: number
    title: string
}
type LocalCityType = {
    title: string
    countryTitle: string
}
type Addresstype = {
    streetTitle: string
    city: LocalCityType
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: Addresstype
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
    id: 1,
    name: 'Don',
    age: 33,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}

console.log(student.address.city.title)
console.log(student.technologies[2].title)