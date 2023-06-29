const Query = {
  allCountries: async (_, __, ctx) => {
    return await ctx.Country.find()
  },

  allUniversities: async (_, __, ctx) => {
    let universities = await ctx.University.find()
    universities = universities.map((item) => { return item.name })
    return universities
  }
}

module.exports = Query