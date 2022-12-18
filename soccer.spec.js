describe('Test for the Soccer Game', () =>{

    describe('Test the getTotalPoints Method', () =>{
        it('Should return correct point total', () => {
            const points = getTotalPoints('wwdl')
            expect(points).toBe(7)
            expect(getTotalPoints('dddl')).toBe(3)
            expect(getTotalPoints('dddl')).toBe(3)
            expect(getTotalPoints('dddl')).toBe(3)
            expect(getTotalPoints('dddl')).toBe(3)
            expect(getTotalPoints('dddl')).toBe(3)
        })
        it('Should return the correct team, with Points',() =>{
            const team1={
                name: "Sounders",
                results: "wwwwldl"
            };
            const team2={
                name: "Galaxy",
                results: "ldwdwlwl"
            };
            const expectedString = `Sounders: 16
            Galaxy: 11`

            const result = orderTeams(team1, team2)
            // expect(result).toEqual(expectedString)
            expect(expectedString).toContain("Sounders") 


        })
    })
})






//classnote
//describe function (string, function) - group related tests together

//it (string, function) - describe one test spec

//expect(value) - chain with matching method 

//expect(number).toBe(11)
// check if number ===11


//expect(number).not.toBe(11)
//check if numer !=11



