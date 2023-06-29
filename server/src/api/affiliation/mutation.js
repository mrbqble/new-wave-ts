const Mutation = {
  newCountry: async (_, { input }, ctx) => {
    const country = new ctx.Country({name: input, cities: []})
    await country.save()
    return "Country was created"
  },

  newCity: async (_, { input }, ctx) => {
    const { countryName, city } = input
    const country = await ctx.Country.findOne({name: countryName})
    country.cities = [...country.cities, {name: city}]
    await country.save()
    return "City was created"
  }
}

module.exports = Mutation