 const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              }
              let copyobj={...user}
              copyobj.name="rrr"
              copyobj.preferences.theme="white"
              user.log="jfn"
              copyobj.log="djdj"
              console.log(copyobj)
              console.log(user)
