import { CityType } from "../02/02_02"
import { addMoneyToBudget, demolishHouseOnTheStreet, repairHouse, toFireStaff, toHireStaff } from "./03"


let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false, id: 1,
                address: {
                    number: 100, street: { title: 'White street' }
                }
            },
            {
                buildedAt: 2008, repaired: false, id: 2,
                address: {
                    number: 100, street: { title: 'Happy street' }
                }
            },
            {
                buildedAt: 2020, repaired: false, id: 3,
                address: {
                    number: 101, street: { title: 'Happy street' }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizenNumber: 1000000
    }
})

test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test('Budget should be changed for FireStation', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test.skip('House should be destroyed', () => {
    demolishHouseOnTheStreet(city, 'Happy Street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe91
})

test('House should be repaired', () => {

    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[0].repaired).toBe(false)
})

test('staff should be increased', () => {
    
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test.skip('staff should be repaired', () => {
    
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[1].staffCount).toBe(1020)
})