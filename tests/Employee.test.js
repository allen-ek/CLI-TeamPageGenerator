const Employee = require('../lib/Employee');

describe("Employee",()=>{
    
    describe('Constructer',()=>{
        it("should create an object with property name, id, email,set to the name, id, email, arguments provided with the new keyword",()=>{
            const name="allen";
            const id="1";
            const email="allenkleined@gmail.com";
            //act
            const obj= new Employee(name,id,email);
            //assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            
        });
        describe("get methods", () => {
            const obj= new Employee('allen',"1","allenkleined@gmail.com");
            it("returns name", () => {
              expect(obj.getName()).toBe("allen");
            });
            it("returns id", () => {
                expect(obj.getId()).toBe("1");
              });
              it("returns email", () => {
                expect(obj.getEmail()).toBe("allenkleined@gmail.com");
              });
              it("returns role", () => {
                expect(obj.getRole()).toBe("Employee");
              });
          });
    });

});