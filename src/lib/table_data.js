import fs from 'fs';
//import exampleData from './exampleData';

export function Data (key, id, age, gender, race, living, income) {
    return {
      key: key,
      id: id,
      age: age,
      gender: gender,
      race: race,
      living: living,
      income: income
    }
}

//
export const columns = [
  {title: 'ID',dataIndex: 'id', key: 'id',},
  {title: 'Age',dataIndex: 'age', key: 'age',},
  {title: 'Gender',dataIndex: 'gender',key: 'gender',},
  {title: 'Race',dataIndex: 'race',key: 'race',},
  {title: 'Living Situation',dataIndex: 'living',key: 'living',},
  {title: 'Household Income',dataIndex: 'income',key: 'income'}
]
let example = Data(1, 1, 20, 'm', 'white', 'single', 'income')
let empty = []
for (let i = 1; i <= 10; i++) {
  let races = ['white', 'black', 'latino']
  let status = ['married', 'single']
  let ages = Math.floor(Math.random() * i) + 15
  let randomRaces = races[Math.floor(Math.random() >> 2)]
  let randomIncomes = Math.floor(Math.random() + (i*7))+10000
  let randomStatus = status[Math.floor(Math.random() * 2)]

  empty.push(Data(1, i, ages, 'm', randomRaces, randomStatus, randomIncomes))
}
//let example = JSON.parse(exampleData);

export const data = empty;
