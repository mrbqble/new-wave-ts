const gql = require('apollo-server-core')

const typeDefs = gql`
  input CityInput {
    name: String
    schools: [String]
  }

  input CountryInput {
    name: String
    colleges: [String]
    cities: [CityInput]
  }

  type City {
    name: String
    schools: [String]
  }

  type Country {
    name: String
    cities: [City]
    colleges: [String]
  }

  input CityInput {
    city: String
    countryName: String
  }

  input SchoolInput {
    school: String
    cityName: String
    countryName: String
  }

  input CollegeInput {
    college: String
    countryName: String
  }

  type Query {
    allCountries: [Country]
    allUniversities: [String]
  }

  type Mutation {
    newCity(input: CityInput): String
    newCountry(input: String): String
    newUniversity(input: String): String
    newSchool(input: SchoolInput): String
    newCollege(input: CollegeInput): String
  }
`

module.exports = typeDefs