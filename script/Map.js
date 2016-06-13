/**
 * Created by Kuro on 5/29/2016.
 */
var map=   [[9,0,9,0,9,0,9,0,17,17,17,17,17,7,24,19,25,24,23,25,24,23,19,24,25,19,25,24,24,24,25,19,25,25,19,25,25,24,24,24,25,7,24,24,24,24,25,25,25,25,25,25,25,24,25,19,24,25,25,25],
    [0,0,0,0,0,0,0,0,17,17,17,17,17,7,0,24,19,25,23,24,19,25,25,0,24,24,24,0,0,0,25,25,25,25,25,25,7,7,23,0,25,23,19,0,0,0,25,19,25,25,25,24,25,0,25,25,0,25,23,19],
    [9,0,20,0,0,9,0,17,17,17,17,17,21,21,24,0,25,25,25,0,25,25,25,25,0,0,0,25,25,25,25,25,25,25,19,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,0,25,25,25,25,25,25,25,25],
    [0,0,0,0,0,0,0,17,17,17,21,17,7,7,0,25,23,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,19,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25],
    [9,0,0,0,0,9,0,17,17,17,21,7,19,25,25,25,25,19,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,7,25,25,25,25,25,25,25,25,25,25,25,25,25,25,19,25,25,25,25,25,25,25,25,25,25],
    [0,0,0,7,11,0,0,11,11,14,18,7,7,25,25,25,25,25,25,25,7,7,7,7,25,25,25,25,25,25,25,25,25,25,25,25,7,25,25,19,25,25,25,25,25,19,25,25,25,25,25,25,25,25,25,25,25,25,25,25],
    [14,0,15,7,21,21,11,11,14,11,24,7,17,17,17,17,17,10,7,22,18,18,10,10,10,10,18,17,17,17,0,9,0,9,0,7,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,19,25,25,25,25,25],
    [17,0,0,7,0,8,11,12,0,11,0,7,7,10,17,0,0,10,7,10,10,10,10,10,0,0,17,17,17,17,17,0,0,0,0,7,25,25,25,24,25,25,25,25,19,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25],
    [17,21,0,7,0,0,9,0,9,0,18,18,7,10,17,0,9,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,25,25,25,0,25,25,25,23,25,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25],
    [17,17,0,7,0,0,0,0,0,0,0,0,7,10,14,12,0,0,7,0,0,12,12,0,0,18,18,0,10,10,0,0,0,0,0,7,25,25,7,25,25,24,25,25,25,0,25,24,25,25,25,25,25,25,25,25,25,25,25,25],
    [18,9,0,7,14,0,11,11,0,11,0,22,7,14,18,22,10,10,7,18,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,7,25,25,7,25,25,0,19,25,25,25,25,0,25,25,25,25,25,25,25,25,25,25,25,25,24,0,0],
    [10,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,25,25,25,25,25,25,25,25,25,25,25,25,25,25,23,25,25,25],
    [9,0,0,7,18,0,0,11,18,10,10,0,0,0,0,17,0,0,7,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,7,0,22,7,0,0,0,20,0,0,0,0,0,17,17,17,11,11,11,0,0,0,0,0,9],
    [0,0,12,7,10,0,0,0,0,0,0,0,14,14,0,9,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,18,7,0,3,0,0,0,0,0,3,0,21,17,17,17,17,0,11,0,0,0,0,0],
    [9,0,12,7,10,18,0,0,0,0,0,0,0,0,0,0,0,0,7,0,14,14,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,7,0,0,0,0,0,0,0,0,0,0,21,17,17,17,17,0,0,0,0,0,9],
    [0,0,0,7,0,0,4,0,0,0,18,0,0,0,0,0,17,0,7,18,0,0,0,0,0,0,0,0,0,0,0,0,18,0,22,7,0,0,7,13,13,13,13,13,0,0,9,0,0,0,9,0,0,0,0,0,0,9,0,0],
    [17,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,7,0,0,0,29,26,27,28,0,0,9,0,0,0,0,0,18,0,0,0,0,9],
    [0,17,0,7,0,0,0,0,0,0,0,0,0,10,10,0,0,22,7,9,0,17,17,9,0,17,17,17,17,0,7,0,14,14,0,0,0,0,7,14,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0],
    [18,12,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,9,0,0,0,0,17,0,21,21,7,0,0,18,0,0,14,0,7,14,0,0,0,0,0,0,0,8,0,0,0,0,0,0,9,0,0,0,0,9],
    [0,0,0,0,0,0,0,0,0,18,18,18,0,0,10,10,10,0,7,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,7,14,0,0,0,12,0,0,0,18,0,0,0,0,0,0,0,0,9,0,0],
    [0,18,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,7,0,0,0,0,0,0,12,0,0,0,0,18,0,0,0,0,0,0,0,0,9],
    [0,0,12,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,9,0,9,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,7,0,0,0,0,0,9,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    [0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,7,18,0,0,0,0,0,0,0,0,0,0,14,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,14,0,7,0,0,0,0,9,0,0,0,0,0,0,14,0,0,7,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,9],
    [0,0,0,9,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,18,14,0,0,0,7,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0],
    [0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    [0,0,0,14,14,0,0,0,0,0,0,0,10,10,10,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,10,10,10,10,10,0,0,0,0,0,0,0,22,7,0,0,14,14,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,0,0,0,14,14,0,0,0,0,0,0,0,0,0,0,12,0,7,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0],
    [17,10,10,10,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,9,7,7,7,0,17,17,21,21,0,0,3,0,20,0,0,0,3,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0],
    [0,0,0,7,7,9,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,13,0,9,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,10,7,7,0,0,0,17,17,0,12,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,7,0,0,0,0,9,0,0,18,0,0,0,0,14,0,0,0,0,0],
    [0,0,10,7,7,9,0,9,0,0,0,0,0,16,0,0,13,13,13,13,13,13,0,9,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,9,0,0,14,14,14,0,0,9],
    [9,0,10,7,7,0,0,0,0,0,0,0,0,0,26,27,28,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,10,7,7,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],
    [9,0,10,7,7,9,0,7,7,0,9,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,17,17,17,0,9,0,0,0,10,10,0,9,0,0,0,0,0,0,0,0,0],
    [0,0,10,7,10,7,7,7,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,17,17,17,0,0,0,0,9,0,0,0,0,0,0,9,0,0,0,0,0,0],
    [9,0,7,7,10,9,0,7,7,0,9,0,0,9,0,0,9,0,0,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,17,21,0,0,20,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0],
    [0,0,7,10,10,0,0,7,9,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [9,0,7,10,10,9,0,7,0,0,11,11,12,9,0,11,0,9,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,9,0,0,0,0,0,0],
    [0,0,7,7,7,0,0,7,7,9,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,13,13,13,13,13,13,13,0,26,27,28,29,0,0,0,0,0,0,0,0,0,0],
    [0,9,0,7,7,7,7,7,7,7,0,0,0,0,0,0,9,0,0,0,0,9,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0],
    [0,0,0,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [9,0,9,0,0,9,0,0,0,0,0,0,0,9,0,11,0,0,0,0,9,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,12,18,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0],
    [0,0,0,0,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,6,6,10,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,6,6,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0],
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,10,6,6,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,6,6,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,10,10,10,10,10,10,10,10,10,10,10,10,10,0,0,0,0,0,0,0,0,10,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,10,10,4,10,5,10,10,10,1,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,10,0,0,0,0,0,0,0,0,10,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,10,0,0,0,0,0,0,10,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,10,0,0,0,0,0,0,0,0,10,6,6,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    [6,6,10,0,0,13,13,13,13,10,0,0,0,0,18,6,1,0,9,0,6,10,18,1,0,6,10,0,0,0,0,0,0,0,0,10,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
    [6,6,10,26,27,28,29,0,13,10,0,0,9,0,17,6,0,0,0,0,6,9,0,0,0,6,10,0,0,0,0,0,0,0,0,10,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
    [6,6,10,10,10,10,10,0,13,10,0,0,0,0,0,6,0,0,18,0,6,0,0,0,0,6,10,10,10,10,10,10,10,10,10,10,6,6,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,6,6,6,6,6,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,6,6,6,6,6,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
