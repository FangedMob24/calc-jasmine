
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment(
     {
      amount: +(1000),
      years: +(5),
      rate: +(25),
    }
  )).toEqual(2083.33)
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment(
    {
      amount: +(1000),
      years: +(20),
      rate: +(12),
    }
  )).toEqual(1000.00)
});

/// etc
