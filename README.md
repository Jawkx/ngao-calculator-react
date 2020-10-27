# Ngao Calculator React

## Description
This is a calculator that will calculate the highest possible reading of a popular card game "Ngao"

## How to win?
Every player will get 5 cards where they can arrange in a manner that have the highest "power". The highest power's player win

## Rules

### Check if the sets is valid

1. Every player are dealed with 5 cards, where the player will normally arrange it in two rows, the first row contain 2 cards, the second row containing the remaining 3 cards.
2. The first rule of checking if the cards if "valid" is whether it have a "passport". Passport are placed at the second row, it consists of three cards that have a remainder of 0 when was divided by 10. While J Q and K are all considered as 10. If there is no valid "passport", the sets of card will automatically be considered as the lowest power
3. Then the two cards above will become your "valid card". There is different combination of valid card which I will explain below.

### Check the "power" of the sets
The "power" below are ranked from the most powerfull to the least powerful
1. Full picture: This set is the rarest one, to get this set, one must have all 5 cards in either "J" , "Q" or "K"
2. Donggu: In this set, the card in first row must be 1 Ace of Spade and another one must be either J, Q or K.
3. Bou Bou: In this set, the cards in the first row must be same value.
4. 10: If the sum of the number above are 10.
5. number: get the sum of the number divide by 10 and get it's remainder

