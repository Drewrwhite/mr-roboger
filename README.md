Describe: beepBoop()

Test: It should return just "0" as a string when it is inputed
Code: 
beepBoop(0)
Expected Output: "0"

Test: It should return "Beep!" instead of 1 in a string
Code:
beepBoop(1)
Expected Output: "Beep!"

Test: It should return "Boop!" instead of 2 in a string
Code: 
beepBoop(2)
Expected Output: "Boop!"

Test: It should return "Won't you be my neighbor?" instead of 3 in a string
Code: 
beepBoop(3)
Expected Output: "Won't you be my neighbor?"

Test: It should return a string with numbers less than 1 and 1 replaced by "Beep!"
Code:
beepBoop(1)
Expected Output: "0 Beep!"

Test: It should return a string with numbers less than 2 and 1 replaced by "Beep! Boop!"
Code:
beepBoop(2)
Expected Output: "0 Beep! Boop!"

Test: It should return a string with numbers less than 3, 2 and, 1 replaced by "Beep! Boop! Won't you be my neighbor?"
Code:
beepBoop(3)
Expected Output: "0 Beep! Boop! Won't you be my neighbor?"

Test: It should return a string creating hierarchy from 3 - 2 - 1
Code:
beepBoop(13)
Expected Output: "0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop! Won't you be my neighbor?"
