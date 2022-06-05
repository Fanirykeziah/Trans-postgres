import { faker as f } from '@faker-js/faker';

/* 
 * beware: relaunching data in this file (using console.log) will not generate the
 * same data as in the file 'readyInsert.js'
 */

// === constant === //
    const N = 50;
// === end === //

// == CLIENT == //
let client = '';
for (let id = 0; id < N; id ++) {
    const fname = f.name.firstName();
    const lname = f.name.lastName();
    const cin = f.helpers.replaceCreditCardSymbols('#{12}');
    const contact = f.helpers.replaceCreditCardSymbols('03[2-4] ## ### ##');

    client += ` (${id + 1}, ${fname}, ${lname}, ${cin}, ${contact})`;

    client += (id !== N - 1) ? ',\n' : '\n;';
}
client = "INSERT INTO CLIENT values\n".concat(client);
console.log(client);
