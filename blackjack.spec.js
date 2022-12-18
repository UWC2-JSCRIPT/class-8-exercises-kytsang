describe('Blackjack', function() {
    const ace = { val: 11, displayVal: 'Ace', suit: 'hearts'};
    const two = { val: 2, displayVal: '2', suit: 'hearts'};
    const four = { val: 4, displayVal: '4', suit: 'hearts'};
    const five = { val: 5, displayVal: '5', suit: 'hearts'};
    const six = { val: 6, displayVal: '6', suit: 'hearts'};
    const seven = { val: 7, displayVal: '7', suit: 'hearts'};
    const nine = { val: 9, displayVal: '9', suit: 'hearts'};
    const ten = { val: 10, displayVal: '10', suit: 'hearts'};

    describe('dealerShouldDraw function', function() {
        //dealer should not draw
        it('Dealer should stay on 19', function(){
            expect(dealerShouldDraw([ten, nine])).toEqual(false);
        });
        //dealer can draw
        it('Dealer should draw on soft 17', function(){
            expect(dealerShouldDraw([ace, six])).toEqual(true);
        });
        //dealer should not draw
        it('Dealer should stay on normal 17', function(){
            expect(dealerShouldDraw([ten, six, ace])).toEqual(false);
        });
        //dealer can draw
        it('Dealer should draw on 13', function(){
            expect(dealerShouldDraw([two, four, two, five])).toEqual(true);
        });
    });

    // describe('calsPoints function', function(){
    //     it('Should calculate a hard hand value correctly', function(){
    //         const expected ={
    //             total: 19,
    //             isSoft: false
    //         };
    //         expect(calcPoints([ten, nine])).toEqual(expected);
    //     });
    //     it('Should add isSoft if there is an Ace', function(){
    //         const expected = {
    //             total: 17,
    //             isSoft: true
    //         };
    //         expect(calcPoints([ace, six])).toEqual(expected);
    //     });
    //     it('Should add a hard Ace correctly', function(){
    //         const expected = {
    //             total: 22,
    //             isSoft: false
    //         };
    //         expect(calcPoints([ace, two, ace, six])).toEqual(expected);
    //     });
    //     it('Should calculate multiple aces/soft correctly', function(){
    //         const expected = {
    //             total: 20,
    //             isSoft: true
    //         };
    //         expect(calcPoints([ace, two, ace, six])).toEqual(expected);
    //     })
    //     it('Should calculate multiple aces/ not soft correctly', function(){
    //         const expected = {
    //             total: 14,
    //             isSoft: false 
    //         };
    //         expect(calcPoints([ace, two, ace, ten])).toEqual(expected);
    //     });
    //     });

    });



// soft = counting ace as 11, hard = counting ace as 1 , or a hand with no ace