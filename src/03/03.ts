import { GovernmentBuildingType, CityType, HouseType } from './../02/02_02';
import { student, StudentType } from './../02/02';
export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum(2, 3)
const res2 = sum(3, 3)
const res3 = sum(sum(1, 2), sum(3, 4))

export const addSkill = (student: StudentType, skill: string) => {

    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, city: String) => {
    return student.address.city.title === city
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const demolishHouseOnTheStreet = (city: CityType, street: string) => {

}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}
export const toFireStaff = (building: GovernmentBuildingType, staffToFire: number) => {
   building.staffCount -= staffToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffToHire: number) => {
    building.staffCount += staffToHire
}