const employees = [
  { id: 1, name: "Jim Bob",   hourlyRate: 22,    hoursWorked: 80 },
  { id: 2, name: "Vince Reynolds",         hourlyRate: 20, hoursWorked: 35  },
  { id: 3, name: " Wade Watts", hourlyRate: 28.5,  hoursWorked: 45  },
  { id: 4, name: " Alice Adair",      hourlyRate: 30,  hoursWorked: 38  },
  { id: 5, name: "Roy Daniels",  hourlyRate: "17",    hoursWorked: 50  }
];

function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40)
    return baseHours * rate;
}

//overtime
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        const overtimeHours = hours - 40;
        return overtimeHours * rate * 1.5;
    }
    return 0;
}
// calculate Taxes
function calculateTaxes(grossPay) {
    return grossPay * 0.85;
}

function processPayroll(employee) {
    const rate = Number(employee.hourlyRate);
    const basePay  = calculateBasePay(rate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(rate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);

return {
    name: employee.name,
    basePay: basePay,
    overtimePay: overtimePay,
    grossPay: grossPay,
    netPay: netPay
};

};

for (let employee of employees) {
    console.log(processPayroll(employee));
};
