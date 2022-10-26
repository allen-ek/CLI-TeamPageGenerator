const Engineer = require('../lib/Engineer');

describe("Engineer", ()=>{
    
    describe('Constructer',()=>{
        it("should create an object with property name, id, email,set to the name, id, email, arguments provided with the new keyword",()=>{
            const name="allen";
            const id="1";
            const email="allenkleined@gmail.com";
            const github="allen-ek"
            //act
            const engineer= new Engineer(name,id,email,github);
            //assert
            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
            
        });
        describe("get methods", () => {
            const obj= new Engineer('allen',"1","allenkleined@gmail.com","allen-ek");
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
                expect(obj.getRole()).toBe("Engineer");
              });
              it("returns github", () => {
                expect(obj.getGithub()).toBe("allen-ek");
              });
          });
    });

});