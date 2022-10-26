const Intern = require('../lib/Intern');
describe("Intern", ()=>{
    
    describe('Constructer',()=>{
        it("should create an object with property name, id, email,set to the name, id, email, arguments provided with the new keyword",()=>{
            const name="allen";
            const id="1";
            const email="allenkleined@gmail.com";
            const school="UCSC"
            //act
            const obj= new Intern(name,id,email,school);
            //assert
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
            
        });
        describe("get methods", () => {
            const obj= new Intern('allen',"1","allenkleined@gmail.com","UCSC");
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
                expect(obj.getRole()).toBe("Intern");
              });
              it("returns office number", () => {
                expect(obj.getSchool()).toBe("UCSC");
              });
          });
    });

});