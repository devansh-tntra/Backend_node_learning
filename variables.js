/**
 * ==============================================================================
 * STEP-BY-STEP LEARNING GUIDE: JavaScript var vs let vs const
 * ==============================================================================
 * Run this file using:
 *    node Backend_node_learning/variables.js
 * ==============================================================================
 */

'use strict';

console.log('======================================================================');
console.log('       LEARNING JAVASCRIPT: var vs let vs const BY EXAMPLE            ');
console.log('======================================================================\n');

  // ==============================================================================
  // EXAMPLE 1: SCOPE (Where can the variable be accessed?)
  // ==============================================================================
  // - var   : Function-scoped (ignores { } blocks like if, for, while)
  // - let   : Block-scoped (lives strictly inside the { } where it was created)
  // - const : Block-scoped (lives strictly inside the { } where it was created)
  // ==============================================================================
  console.log('--- EXAMPLE 1: SCOPE (Block Scope vs Function Scope) ---');

  function testScope() {
    if (true) {
      var varScoped = 'I am var (Function-scoped)';
      let letScoped = 'I am let (Block-scoped)';
      const constScoped = 'I am const (Block-scoped)';

      console.log('Inside the block:');
      console.log('  ', varScoped);
      console.log('  ', letScoped);
      console.log('  ', constScoped);
    }

    console.log('\nOutside the block:');
    // var is accessible because it leaks outside the if { } block into the function
    console.log('  [var]   Accessible outside:', varScoped);

    // let is NOT accessible outside the block
    try {
      console.log(letScoped);
    } catch (err) {
      console.log('  [let]   NOT accessible outside -> Error:', err.message);
    }

    // const is NOT accessible outside the block
    try {
      console.log(constScoped);
    } catch (err) {
      console.log('  [const] NOT accessible outside -> Error:', err.message);
    }
  }
  testScope();
  console.log();

  // ==============================================================================
  // EXAMPLE 2: REASSIGNMENT (Can you change the value?)
  // ==============================================================================
  // - var   : Can be reassigned anytime
  // - let   : Can be reassigned anytime
  // - const : CANNOT be reassigned (Value is constant / fixed)
  // ==============================================================================
  console.log('--- EXAMPLE 2: REASSIGNMENT (Can we change the value?) ---');

  // 1. var
  var userRole = 'Guest';
  userRole = 'Admin';
  console.log('  [var]   userRole reassigned to:', userRole);

  // 2. let
  let userScore = 10;
  userScore = 25;
  console.log('  [let]   userScore reassigned to:', userScore);

  // 3. const
  const userEmail = 'dev@example.com';
  console.log('  [const] userEmail initial value:', userEmail);
  try {
    // Trying to reassign a const will throw a TypeError:
    // userEmail = 'new@example.com';
    eval('userEmail = "new@example.com";');
  } catch (err) {
    console.log('  [const] Reassignment failed -> Error:', err.message);
  }
  console.log();

  // ==============================================================================
  // EXAMPLE 3: REDECLARATION (Can you declare the same variable name twice?)
  // ==============================================================================
  // - var   : Allows redeclaration in the same scope (dangerous in large files!)
  // - let   : Prohibits redeclaration in the same scope
  // - const : Prohibits redeclaration in the same scope
  // ==============================================================================
  console.log('--- EXAMPLE 3: REDECLARATION (Declaring the same name twice) ---');

  // var allows redeclaration silently:
  var country = 'India';
  var country = 'Japan'; // Silently overwrites without warning!
  console.log('  [var]   Redeclared country without error:', country);

  // let and const prevent accidental redeclaration:
  let city = 'Delhi';
  // let city = 'Mumbai'; // SyntaxError: Identifier 'city' has already been declared
  console.log('  [let]   Protects against duplicate declaration in the same scope.');

  const taxRate = 18;
  // const taxRate = 20; // SyntaxError: Identifier 'taxRate' has already been declared
  console.log('  [const] Protects against duplicate declaration in the same scope.');
  console.log();

  // ==============================================================================
  // EXAMPLE 4: HOISTING (What happens if we use it before declaring?)
  // ==============================================================================
  // - var   : Hoisted and initialized with `undefined` (causes silent bugs)
  // - let   : Hoisted into Temporal Dead Zone (TDZ) -> throws ReferenceError
  // - const : Hoisted into Temporal Dead Zone (TDZ) -> throws ReferenceError
  // ==============================================================================
  console.log('--- EXAMPLE 4: HOISTING & TEMPORAL DEAD ZONE (TDZ) ---');

  function testHoisting() {
    // var is hoisted with `undefined`:
    console.log('  [var]   cartTotal before declaration:', cartTotal); // prints: undefined
    var cartTotal = 999;
    console.log('  [var]   cartTotal after declaration :', cartTotal);

    // let / const are hoisted, but in TDZ (cannot be used before their line):
    try {
      eval('console.log(shippingCost);');
    } catch (err) {
      console.log('  [let]   shippingCost before declaration -> Error:', err.message);
    }
    let shippingCost = 50;
    console.log('  [let]   shippingCost after declaration  :', shippingCost);
  }
  testHoisting();
  console.log();

  // ==============================================================================
  // EXAMPLE 5: const WITH OBJECTS & ARRAYS (Mutation vs Reassignment)
  // ==============================================================================
  // IMPORTANT: `const` means the reference cannot change, but the contents CAN!
  // ==============================================================================
  console.log('--- EXAMPLE 5: const WITH OBJECTS & ARRAYS (Very Important!) ---');

  const student = {
    name: 'Rahul',
    age: 22,
  };

  // 1. Modifying properties is ALLOWED:
  student.age = 23;
  student.course = 'Node.js Backend';
  console.log('  [const] Object properties can be modified:', student);

  // 2. Modifying array elements is ALLOWED:
  const skills = ['JavaScript', 'HTML'];
  skills.push('Node.js');
  console.log('  [const] Array items can be added/modified:', skills);

  // 3. Reassigning the entire object/array is NOT ALLOWED:
  try {
    // student = { name: 'Aman' }; // TypeError: Assignment to constant variable
    eval('student = { name: "Aman" };');
  } catch (err) {
    console.log('  [const] Reassigning whole object failed -> Error:', err.message);
  }
  console.log();

  // ==============================================================================
  // EXAMPLE 6: FOR LOOPS & TIMERS (The Classic Interview Problem)
  // ==============================================================================
  console.log('--- EXAMPLE 6: LOOPS & ASYNC BEHAVIOR ---');

  // With var: only 1 shared variable exists for the whole loop
  // With let: a brand new variable is created for EACH loop iteration
  for (let step = 1; step <= 3; step++) {
    setTimeout(() => {
      console.log(`  [let in loop] Executed step #${step}`);
    }, 100 * step);
  }

  // ==============================================================================
  // SUMMARY & BEST PRACTICES
  // ==============================================================================
  setTimeout(() => {
    console.log('\n======================================================================');
    console.log('                   SUMMARY TABLE (QUICK CHEATSHEET)                   ');
    console.log('======================================================================');
    console.table([
      { Property: 'Scope', var: 'Function', let: 'Block { }', const: 'Block { }' },
      { Property: 'Reassignable', var: 'Yes', let: 'Yes', const: 'No' },
      { Property: 'Redeclarable', var: 'Yes (Risky)', let: 'No', const: 'No' },
      { Property: 'Hoisting Result', var: 'undefined', let: 'ReferenceError', const: 'ReferenceError' },
      { Property: 'Recommended Use', var: 'Avoid (Legacy)', let: 'Counters / Changing state', const: 'Default choice (90%)' },
    ]);

    console.log('\nGolden Rule in Modern JavaScript:');
    console.log('  1. Use `const` by default for everything.');
    console.log('  2. Use `let` only when you know the variable value needs to change.');
    console.log('  3. Avoid `var` completely in modern code.\n');
  }, 500);