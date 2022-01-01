# Rybalko Yakov

### My Contacts:

1. Email: [RybalkoYakovv@gmail.com]()
2. Phone number: +375 29 2582264
3. GitHub: [RybalkoYakov](https://github.com/RybalkoYakov)

### About myself:

My name is Yakov I am 32 years old.
I work as surveyor engineer.
I like programming, solving various algorithmic tasks.
My goal is to become a cool front-end engineer.

### My skills:
1. HTML5, CSS
2. JavaScript(Basic)
3. C#(Basic)
4. Git

### Code example
**Kata Vasya - Clerk from CodeWars:**

    function tickets(peopleInLine){
        let cashBox = {
            "Bucks25" : 0,
            "Bucks50" : 0,
            "Bucks100" : 0
            }
    
        for (let i = 0; i < peopleInLine.length; i++) {
            if (peopleInLine[i] === 25){
                cashBox.Bucks25++
            } else if (peopleInLine[i] === 50 && cashBox.Bucks25 >= 1){
                cashBox.Bucks50++
                cashBox.Bucks25--
            } else if (peopleInLine[i] === 100) {
                if (cashBox.Bucks50 >= 1 && cashBox.Bucks25 >= 1) {
                    cashBox.Bucks100++
                    cashBox.Bucks50--
                    cashBox.Bucks25--
                } else if (cashBox.Bucks25 >= 3) {
                    cashBox.Bucks100++
                    cashBox.Bucks25-=3
                } else {
                    return "NO"
                }
            } else {
                return "NO"
            }
        }
    
    
        return "YES"
    }

### Education:
**BNTU** Faculty of Transport Communications

### Languages
* Russian (native)
* English (A2 but intensive study)
