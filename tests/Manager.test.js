const Manager = require('../lib/Manager');

describe("Manager", ()=>{
    
    describe('Constructer',()=>{
        it("should create an object with property name, id, email,set to the name, id, email, arguments provided with the new keyword",()=>{
            const name="allen";
            const id="1";
            const email="allenkleined@gmail.com";
            const officeNumber="50"
            //act
            const obj= new Manager(name,id,email,officeNumber);
            //assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
            
        });
        describe("get methods", () => {
            const obj= new Manager('allen',"1","allenkleined@gmail.com","50");
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
                expect(obj.getRole()).toBe("Manager");
              });
              it("returns office number", () => {
                expect(obj.getOfficeNumber()).toBe("50");
              });
          });
    });

});