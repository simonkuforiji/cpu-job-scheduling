// bt max 500

const myArray = [
  {'pid': 1, 'art': 997, 'bt': 105, 'pri': 446, 'wt': -1, 'tat': -1},
{'pid': 2, 'art': 525, 'bt': 109, 'pri': 83, 'wt': -1, 'tat': -1},
{'pid': 3, 'art': 986, 'bt': 179, 'pri': 838, 'wt': -1, 'tat': -1},
{'pid': 4, 'art': 946, 'bt': 47, 'pri': 735, 'wt': -1, 'tat': -1},
{'pid': 5, 'art': 504, 'bt': 247, 'pri': 208, 'wt': -1, 'tat': -1},
{'pid': 6, 'art': 69, 'bt': 253, 'pri': 176, 'wt': -1, 'tat': -1},
{'pid': 7, 'art': 631, 'bt': 233, 'pri': 721, 'wt': -1, 'tat': -1},
{'pid': 8, 'art': 673, 'bt': 187, 'pri': 634, 'wt': -1, 'tat': -1},
{'pid': 9, 'art': 624, 'bt': 290, 'pri': 481, 'wt': -1, 'tat': -1},
{'pid': 10, 'art': 899, 'bt': 399, 'pri': 717, 'wt': -1, 'tat': -1},
{'pid': 11, 'art': 849, 'bt': 310, 'pri': 637, 'wt': -1, 'tat': -1},
{'pid': 12, 'art': 260, 'bt': 242, 'pri': 648, 'wt': -1, 'tat': -1},
{'pid': 13, 'art': 781, 'bt': 230, 'pri': 262, 'wt': -1, 'tat': -1},
{'pid': 14, 'art': 652, 'bt': 180, 'pri': 603, 'wt': -1, 'tat': -1},
{'pid': 15, 'art': 904, 'bt': 147, 'pri': 926, 'wt': -1, 'tat': -1},
{'pid': 16, 'art': 546, 'bt': 366, 'pri': 172, 'wt': -1, 'tat': -1},
{'pid': 17, 'art': 475, 'bt': 348, 'pri': 786, 'wt': -1, 'tat': -1},
{'pid': 18, 'art': 858, 'bt': 64, 'pri': 619, 'wt': -1, 'tat': -1},
{'pid': 19, 'art': 509, 'bt': 436, 'pri': 16, 'wt': -1, 'tat': -1},
{'pid': 20, 'art': 134, 'bt': 47, 'pri': 985, 'wt': -1, 'tat': -1},
{'pid': 21, 'art': 384, 'bt': 441, 'pri': 512, 'wt': -1, 'tat': -1},
{'pid': 22, 'art': 607, 'bt': 207, 'pri': 921, 'wt': -1, 'tat': -1},
{'pid': 23, 'art': 238, 'bt': 213, 'pri': 539, 'wt': -1, 'tat': -1},
{'pid': 24, 'art': 631, 'bt': 423, 'pri': 916, 'wt': -1, 'tat': -1},
{'pid': 25, 'art': 435, 'bt': 116, 'pri': 919, 'wt': -1, 'tat': -1},
{'pid': 26, 'art': 744, 'bt': 216, 'pri': 507, 'wt': -1, 'tat': -1},
{'pid': 27, 'art': 114, 'bt': 371, 'pri': 750, 'wt': -1, 'tat': -1},
{'pid': 28, 'art': 260, 'bt': 500, 'pri': 154, 'wt': -1, 'tat': -1},
{'pid': 29, 'art': 964, 'bt': 37, 'pri': 600, 'wt': -1, 'tat': -1},
{'pid': 30, 'art': 577, 'bt': 208, 'pri': 517, 'wt': -1, 'tat': -1},
{'pid': 31, 'art': 181, 'bt': 60, 'pri': 999, 'wt': -1, 'tat': -1},
{'pid': 32, 'art': 598, 'bt': 391, 'pri': 156, 'wt': -1, 'tat': -1},
{'pid': 33, 'art': 616, 'bt': 293, 'pri': 389, 'wt': -1, 'tat': -1},
{'pid': 34, 'art': 70, 'bt': 258, 'pri': 333, 'wt': -1, 'tat': -1},
{'pid': 35, 'art': 889, 'bt': 244, 'pri': 955, 'wt': -1, 'tat': -1},
{'pid': 36, 'art': 338, 'bt': 458, 'pri': 3, 'wt': -1, 'tat': -1},
{'pid': 37, 'art': 661, 'bt': 158, 'pri': 22, 'wt': -1, 'tat': -1},
{'pid': 38, 'art': 630, 'bt': 132, 'pri': 11, 'wt': -1, 'tat': -1},
{'pid': 39, 'art': 482, 'bt': 410, 'pri': 399, 'wt': -1, 'tat': -1},
{'pid': 40, 'art': 976, 'bt': 167, 'pri': 3, 'wt': -1, 'tat': -1},
{'pid': 41, 'art': 223, 'bt': 11, 'pri': 55, 'wt': -1, 'tat': -1},
{'pid': 42, 'art': 565, 'bt': 26, 'pri': 712, 'wt': -1, 'tat': -1},
{'pid': 43, 'art': 309, 'bt': 322, 'pri': 574, 'wt': -1, 'tat': -1},
{'pid': 44, 'art': 255, 'bt': 126, 'pri': 717, 'wt': -1, 'tat': -1},
{'pid': 45, 'art': 693, 'bt': 451, 'pri': 418, 'wt': -1, 'tat': -1},
{'pid': 46, 'art': 541, 'bt': 88, 'pri': 459, 'wt': -1, 'tat': -1},
{'pid': 47, 'art': 264, 'bt': 236, 'pri': 572, 'wt': -1, 'tat': -1},
{'pid': 48, 'art': 449, 'bt': 337, 'pri': 218, 'wt': -1, 'tat': -1},
{'pid': 49, 'art': 757, 'bt': 474, 'pri': 619, 'wt': -1, 'tat': -1},
{'pid': 50, 'art': 760, 'bt': 456, 'pri': 146, 'wt': -1, 'tat': -1},
{'pid': 51, 'art': 188, 'bt': 406, 'pri': 683, 'wt': -1, 'tat': -1},
{'pid': 52, 'art': 50, 'bt': 299, 'pri': 999, 'wt': -1, 'tat': -1},
{'pid': 53, 'art': 374, 'bt': 221, 'pri': 779, 'wt': -1, 'tat': -1},
{'pid': 54, 'art': 760, 'bt': 4, 'pri': 263, 'wt': -1, 'tat': -1},
{'pid': 55, 'art': 247, 'bt': 408, 'pri': 740, 'wt': -1, 'tat': -1},
{'pid': 56, 'art': 130, 'bt': 485, 'pri': 760, 'wt': -1, 'tat': -1},
{'pid': 57, 'art': 874, 'bt': 15, 'pri': 698, 'wt': -1, 'tat': -1},
{'pid': 58, 'art': 695, 'bt': 220, 'pri': 548, 'wt': -1, 'tat': -1},
{'pid': 59, 'art': 715, 'bt': 59, 'pri': 589, 'wt': -1, 'tat': -1},
{'pid': 60, 'art': 684, 'bt': 271, 'pri': 214, 'wt': -1, 'tat': -1},
{'pid': 61, 'art': 405, 'bt': 101, 'pri': 808, 'wt': -1, 'tat': -1},
{'pid': 62, 'art': 450, 'bt': 317, 'pri': 525, 'wt': -1, 'tat': -1},
{'pid': 63, 'art': 118, 'bt': 126, 'pri': 758, 'wt': -1, 'tat': -1},
{'pid': 64, 'art': 876, 'bt': 416, 'pri': 319, 'wt': -1, 'tat': -1},
{'pid': 65, 'art': 570, 'bt': 123, 'pri': 122, 'wt': -1, 'tat': -1},
{'pid': 66, 'art': 145, 'bt': 484, 'pri': 572, 'wt': -1, 'tat': -1},
{'pid': 67, 'art': 750, 'bt': 81, 'pri': 868, 'wt': -1, 'tat': -1},
{'pid': 68, 'art': 236, 'bt': 417, 'pri': 903, 'wt': -1, 'tat': -1},
{'pid': 69, 'art': 252, 'bt': 279, 'pri': 153, 'wt': -1, 'tat': -1},
{'pid': 70, 'art': 695, 'bt': 216, 'pri': 458, 'wt': -1, 'tat': -1},
{'pid': 71, 'art': 848, 'bt': 171, 'pri': 430, 'wt': -1, 'tat': -1},
{'pid': 72, 'art': 443, 'bt': 112, 'pri': 799, 'wt': -1, 'tat': -1},
{'pid': 73, 'art': 123, 'bt': 183, 'pri': 915, 'wt': -1, 'tat': -1},
{'pid': 74, 'art': 442, 'bt': 172, 'pri': 965, 'wt': -1, 'tat': -1},
{'pid': 75, 'art': 91, 'bt': 232, 'pri': 973, 'wt': -1, 'tat': -1},
{'pid': 76, 'art': 121, 'bt': 430, 'pri': 683, 'wt': -1, 'tat': -1},
{'pid': 77, 'art': 195, 'bt': 361, 'pri': 483, 'wt': -1, 'tat': -1},
{'pid': 78, 'art': 219, 'bt': 339, 'pri': 862, 'wt': -1, 'tat': -1},
{'pid': 79, 'art': 869, 'bt': 387, 'pri': 505, 'wt': -1, 'tat': -1},
{'pid': 80, 'art': 189, 'bt': 299, 'pri': 103, 'wt': -1, 'tat': -1},
{'pid': 81, 'art': 126, 'bt': 301, 'pri': 861, 'wt': -1, 'tat': -1},
{'pid': 82, 'art': 658, 'bt': 291, 'pri': 842, 'wt': -1, 'tat': -1},
{'pid': 83, 'art': 68, 'bt': 82, 'pri': 972, 'wt': -1, 'tat': -1},
{'pid': 84, 'art': 203, 'bt': 231, 'pri': 481, 'wt': -1, 'tat': -1},
{'pid': 85, 'art': 463, 'bt': 292, 'pri': 829, 'wt': -1, 'tat': -1},
{'pid': 86, 'art': 913, 'bt': 38, 'pri': 95, 'wt': -1, 'tat': -1},
{'pid': 87, 'art': 30, 'bt': 92, 'pri': 311, 'wt': -1, 'tat': -1},
{'pid': 88, 'art': 524, 'bt': 102, 'pri': 193, 'wt': -1, 'tat': -1},
{'pid': 89, 'art': 578, 'bt': 489, 'pri': 632, 'wt': -1, 'tat': -1},
{'pid': 90, 'art': 595, 'bt': 454, 'pri': 359, 'wt': -1, 'tat': -1},
{'pid': 91, 'art': 48, 'bt': 207, 'pri': 377, 'wt': -1, 'tat': -1},
{'pid': 92, 'art': 308, 'bt': 336, 'pri': 311, 'wt': -1, 'tat': -1},
{'pid': 93, 'art': 282, 'bt': 398, 'pri': 184, 'wt': -1, 'tat': -1},
{'pid': 94, 'art': 582, 'bt': 468, 'pri': 403, 'wt': -1, 'tat': -1},
{'pid': 95, 'art': 839, 'bt': 266, 'pri': 508, 'wt': -1, 'tat': -1},
{'pid': 96, 'art': 15, 'bt': 28, 'pri': 568, 'wt': -1, 'tat': -1},
{'pid': 97, 'art': 818, 'bt': 203, 'pri': 78, 'wt': -1, 'tat': -1},
{'pid': 98, 'art': 582, 'bt': 427, 'pri': 975, 'wt': -1, 'tat': -1},
{'pid': 99, 'art': 241, 'bt': 142, 'pri': 868, 'wt': -1, 'tat': -1},
{'pid': 100, 'art': 448, 'bt': 135, 'pri': 970, 'wt': -1, 'tat': -1},
{'pid': 101, 'art': 216, 'bt': 98, 'pri': 491, 'wt': -1, 'tat': -1},
{'pid': 102, 'art': 528, 'bt': 236, 'pri': 802, 'wt': -1, 'tat': -1},
{'pid': 103, 'art': 443, 'bt': 204, 'pri': 509, 'wt': -1, 'tat': -1},
{'pid': 104, 'art': 723, 'bt': 130, 'pri': 447, 'wt': -1, 'tat': -1},
{'pid': 105, 'art': 116, 'bt': 223, 'pri': 245, 'wt': -1, 'tat': -1},
{'pid': 106, 'art': 683, 'bt': 31, 'pri': 902, 'wt': -1, 'tat': -1},
{'pid': 107, 'art': 417, 'bt': 355, 'pri': 680, 'wt': -1, 'tat': -1},
{'pid': 108, 'art': 22, 'bt': 417, 'pri': 444, 'wt': -1, 'tat': -1},
{'pid': 109, 'art': 777, 'bt': 218, 'pri': 126, 'wt': -1, 'tat': -1},
{'pid': 110, 'art': 368, 'bt': 317, 'pri': 609, 'wt': -1, 'tat': -1},
{'pid': 111, 'art': 967, 'bt': 13, 'pri': 893, 'wt': -1, 'tat': -1},
{'pid': 112, 'art': 22, 'bt': 64, 'pri': 599, 'wt': -1, 'tat': -1},
{'pid': 113, 'art': 6, 'bt': 151, 'pri': 73, 'wt': -1, 'tat': -1},
{'pid': 114, 'art': 830, 'bt': 55, 'pri': 108, 'wt': -1, 'tat': -1},
{'pid': 115, 'art': 532, 'bt': 427, 'pri': 311, 'wt': -1, 'tat': -1},
{'pid': 116, 'art': 794, 'bt': 340, 'pri': 888, 'wt': -1, 'tat': -1},
{'pid': 117, 'art': 463, 'bt': 126, 'pri': 432, 'wt': -1, 'tat': -1},
{'pid': 118, 'art': 742, 'bt': 16, 'pri': 832, 'wt': -1, 'tat': -1},
{'pid': 119, 'art': 636, 'bt': 163, 'pri': 958, 'wt': -1, 'tat': -1},
{'pid': 120, 'art': 936, 'bt': 208, 'pri': 505, 'wt': -1, 'tat': -1},
{'pid': 121, 'art': 70, 'bt': 76, 'pri': 323, 'wt': -1, 'tat': -1},
{'pid': 122, 'art': 777, 'bt': 315, 'pri': 88, 'wt': -1, 'tat': -1},
{'pid': 123, 'art': 373, 'bt': 132, 'pri': 155, 'wt': -1, 'tat': -1},
{'pid': 124, 'art': 904, 'bt': 431, 'pri': 956, 'wt': -1, 'tat': -1},
{'pid': 125, 'art': 350, 'bt': 1, 'pri': 577, 'wt': -1, 'tat': -1},
{'pid': 126, 'art': 141, 'bt': 317, 'pri': 194, 'wt': -1, 'tat': -1},
{'pid': 127, 'art': 282, 'bt': 189, 'pri': 42, 'wt': -1, 'tat': -1},
{'pid': 128, 'art': 464, 'bt': 177, 'pri': 844, 'wt': -1, 'tat': -1},
{'pid': 129, 'art': 541, 'bt': 492, 'pri': 237, 'wt': -1, 'tat': -1},
{'pid': 130, 'art': 831, 'bt': 494, 'pri': 713, 'wt': -1, 'tat': -1},
{'pid': 131, 'art': 828, 'bt': 219, 'pri': 429, 'wt': -1, 'tat': -1},
{'pid': 132, 'art': 744, 'bt': 164, 'pri': 771, 'wt': -1, 'tat': -1},
{'pid': 133, 'art': 926, 'bt': 357, 'pri': 667, 'wt': -1, 'tat': -1},
{'pid': 134, 'art': 492, 'bt': 279, 'pri': 541, 'wt': -1, 'tat': -1},
{'pid': 135, 'art': 687, 'bt': 325, 'pri': 680, 'wt': -1, 'tat': -1},
{'pid': 136, 'art': 743, 'bt': 213, 'pri': 302, 'wt': -1, 'tat': -1},
{'pid': 137, 'art': 689, 'bt': 278, 'pri': 270, 'wt': -1, 'tat': -1},
{'pid': 138, 'art': 293, 'bt': 369, 'pri': 80, 'wt': -1, 'tat': -1},
{'pid': 139, 'art': 944, 'bt': 436, 'pri': 643, 'wt': -1, 'tat': -1},
{'pid': 140, 'art': 301, 'bt': 129, 'pri': 177, 'wt': -1, 'tat': -1},
{'pid': 141, 'art': 325, 'bt': 45, 'pri': 981, 'wt': -1, 'tat': -1},
{'pid': 142, 'art': 937, 'bt': 384, 'pri': 60, 'wt': -1, 'tat': -1},
{'pid': 143, 'art': 127, 'bt': 430, 'pri': 243, 'wt': -1, 'tat': -1},
{'pid': 144, 'art': 483, 'bt': 387, 'pri': 838, 'wt': -1, 'tat': -1},
{'pid': 145, 'art': 131, 'bt': 138, 'pri': 755, 'wt': -1, 'tat': -1},
{'pid': 146, 'art': 560, 'bt': 333, 'pri': 401, 'wt': -1, 'tat': -1},
{'pid': 147, 'art': 878, 'bt': 166, 'pri': 904, 'wt': -1, 'tat': -1},
{'pid': 148, 'art': 628, 'bt': 70, 'pri': 257, 'wt': -1, 'tat': -1},
{'pid': 149, 'art': 893, 'bt': 197, 'pri': 763, 'wt': -1, 'tat': -1},
{'pid': 150, 'art': 643, 'bt': 226, 'pri': 918, 'wt': -1, 'tat': -1},
{'pid': 151, 'art': 717, 'bt': 357, 'pri': 480, 'wt': -1, 'tat': -1},
{'pid': 152, 'art': 996, 'bt': 94, 'pri': 822, 'wt': -1, 'tat': -1},
{'pid': 153, 'art': 200, 'bt': 281, 'pri': 867, 'wt': -1, 'tat': -1},
{'pid': 154, 'art': 792, 'bt': 239, 'pri': 353, 'wt': -1, 'tat': -1},
{'pid': 155, 'art': 766, 'bt': 1, 'pri': 143, 'wt': -1, 'tat': -1},
{'pid': 156, 'art': 845, 'bt': 112, 'pri': 976, 'wt': -1, 'tat': -1},
{'pid': 157, 'art': 383, 'bt': 290, 'pri': 707, 'wt': -1, 'tat': -1},
{'pid': 158, 'art': 302, 'bt': 415, 'pri': 955, 'wt': -1, 'tat': -1},
{'pid': 159, 'art': 303, 'bt': 345, 'pri': 405, 'wt': -1, 'tat': -1},
{'pid': 160, 'art': 949, 'bt': 400, 'pri': 94, 'wt': -1, 'tat': -1},
{'pid': 161, 'art': 458, 'bt': 47, 'pri': 992, 'wt': -1, 'tat': -1},
{'pid': 162, 'art': 34, 'bt': 83, 'pri': 483, 'wt': -1, 'tat': -1},
{'pid': 163, 'art': 192, 'bt': 277, 'pri': 495, 'wt': -1, 'tat': -1},
{'pid': 164, 'art': 237, 'bt': 97, 'pri': 567, 'wt': -1, 'tat': -1},
{'pid': 165, 'art': 622, 'bt': 68, 'pri': 759, 'wt': -1, 'tat': -1},
{'pid': 166, 'art': 163, 'bt': 138, 'pri': 645, 'wt': -1, 'tat': -1},
{'pid': 167, 'art': 935, 'bt': 359, 'pri': 343, 'wt': -1, 'tat': -1},
{'pid': 168, 'art': 295, 'bt': 135, 'pri': 138, 'wt': -1, 'tat': -1},
{'pid': 169, 'art': 864, 'bt': 492, 'pri': 997, 'wt': -1, 'tat': -1},
{'pid': 170, 'art': 365, 'bt': 453, 'pri': 31, 'wt': -1, 'tat': -1},
{'pid': 171, 'art': 163, 'bt': 402, 'pri': 228, 'wt': -1, 'tat': -1},
{'pid': 172, 'art': 648, 'bt': 297, 'pri': 773, 'wt': -1, 'tat': -1},
{'pid': 173, 'art': 877, 'bt': 193, 'pri': 524, 'wt': -1, 'tat': -1},
{'pid': 174, 'art': 757, 'bt': 368, 'pri': 571, 'wt': -1, 'tat': -1},
{'pid': 175, 'art': 73, 'bt': 162, 'pri': 175, 'wt': -1, 'tat': -1},
{'pid': 176, 'art': 148, 'bt': 99, 'pri': 164, 'wt': -1, 'tat': -1},
{'pid': 177, 'art': 719, 'bt': 278, 'pri': 218, 'wt': -1, 'tat': -1},
{'pid': 178, 'art': 829, 'bt': 50, 'pri': 705, 'wt': -1, 'tat': -1},
{'pid': 179, 'art': 260, 'bt': 130, 'pri': 494, 'wt': -1, 'tat': -1},
{'pid': 180, 'art': 399, 'bt': 144, 'pri': 959, 'wt': -1, 'tat': -1},
{'pid': 181, 'art': 769, 'bt': 222, 'pri': 255, 'wt': -1, 'tat': -1},
{'pid': 182, 'art': 375, 'bt': 47, 'pri': 215, 'wt': -1, 'tat': -1},
{'pid': 183, 'art': 948, 'bt': 153, 'pri': 208, 'wt': -1, 'tat': -1},
{'pid': 184, 'art': 574, 'bt': 48, 'pri': 375, 'wt': -1, 'tat': -1},
{'pid': 185, 'art': 507, 'bt': 115, 'pri': 619, 'wt': -1, 'tat': -1},
{'pid': 186, 'art': 243, 'bt': 403, 'pri': 373, 'wt': -1, 'tat': -1},
{'pid': 187, 'art': 671, 'bt': 245, 'pri': 77, 'wt': -1, 'tat': -1},
{'pid': 188, 'art': 647, 'bt': 496, 'pri': 909, 'wt': -1, 'tat': -1},
{'pid': 189, 'art': 420, 'bt': 186, 'pri': 777, 'wt': -1, 'tat': -1},
{'pid': 190, 'art': 559, 'bt': 442, 'pri': 72, 'wt': -1, 'tat': -1},
{'pid': 191, 'art': 952, 'bt': 385, 'pri': 212, 'wt': -1, 'tat': -1},
{'pid': 192, 'art': 819, 'bt': 106, 'pri': 643, 'wt': -1, 'tat': -1},
{'pid': 193, 'art': 178, 'bt': 338, 'pri': 261, 'wt': -1, 'tat': -1},
{'pid': 194, 'art': 62, 'bt': 183, 'pri': 885, 'wt': -1, 'tat': -1},
{'pid': 195, 'art': 418, 'bt': 12, 'pri': 847, 'wt': -1, 'tat': -1},
{'pid': 196, 'art': 299, 'bt': 464, 'pri': 52, 'wt': -1, 'tat': -1},
{'pid': 197, 'art': 346, 'bt': 314, 'pri': 271, 'wt': -1, 'tat': -1},
{'pid': 198, 'art': 797, 'bt': 173, 'pri': 90, 'wt': -1, 'tat': -1},
{'pid': 199, 'art': 624, 'bt': 285, 'pri': 769, 'wt': -1, 'tat': -1},
{'pid': 200, 'art': 255, 'bt': 499, 'pri': 467, 'wt': -1, 'tat': -1},
{'pid': 201, 'art': 369, 'bt': 303, 'pri': 573, 'wt': -1, 'tat': -1},
{'pid': 202, 'art': 658, 'bt': 135, 'pri': 771, 'wt': -1, 'tat': -1},
{'pid': 203, 'art': 22, 'bt': 157, 'pri': 241, 'wt': -1, 'tat': -1},
{'pid': 204, 'art': 303, 'bt': 135, 'pri': 694, 'wt': -1, 'tat': -1},
{'pid': 205, 'art': 931, 'bt': 81, 'pri': 272, 'wt': -1, 'tat': -1},
{'pid': 206, 'art': 564, 'bt': 412, 'pri': 412, 'wt': -1, 'tat': -1},
{'pid': 207, 'art': 900, 'bt': 309, 'pri': 648, 'wt': -1, 'tat': -1},
{'pid': 208, 'art': 750, 'bt': 272, 'pri': 429, 'wt': -1, 'tat': -1},
{'pid': 209, 'art': 622, 'bt': 381, 'pri': 67, 'wt': -1, 'tat': -1},
{'pid': 210, 'art': 866, 'bt': 158, 'pri': 290, 'wt': -1, 'tat': -1},
{'pid': 211, 'art': 72, 'bt': 135, 'pri': 567, 'wt': -1, 'tat': -1},
{'pid': 212, 'art': 205, 'bt': 448, 'pri': 352, 'wt': -1, 'tat': -1},
{'pid': 213, 'art': 376, 'bt': 31, 'pri': 640, 'wt': -1, 'tat': -1},
{'pid': 214, 'art': 810, 'bt': 63, 'pri': 861, 'wt': -1, 'tat': -1},
{'pid': 215, 'art': 944, 'bt': 217, 'pri': 485, 'wt': -1, 'tat': -1},
{'pid': 216, 'art': 904, 'bt': 232, 'pri': 441, 'wt': -1, 'tat': -1},
{'pid': 217, 'art': 122, 'bt': 338, 'pri': 682, 'wt': -1, 'tat': -1},
{'pid': 218, 'art': 211, 'bt': 236, 'pri': 813, 'wt': -1, 'tat': -1},
{'pid': 219, 'art': 268, 'bt': 8, 'pri': 414, 'wt': -1, 'tat': -1},
{'pid': 220, 'art': 759, 'bt': 136, 'pri': 998, 'wt': -1, 'tat': -1},
{'pid': 221, 'art': 111, 'bt': 499, 'pri': 454, 'wt': -1, 'tat': -1},
{'pid': 222, 'art': 684, 'bt': 430, 'pri': 168, 'wt': -1, 'tat': -1},
{'pid': 223, 'art': 134, 'bt': 391, 'pri': 969, 'wt': -1, 'tat': -1},
{'pid': 224, 'art': 387, 'bt': 207, 'pri': 324, 'wt': -1, 'tat': -1},
{'pid': 225, 'art': 112, 'bt': 257, 'pri': 919, 'wt': -1, 'tat': -1},
{'pid': 226, 'art': 886, 'bt': 77, 'pri': 322, 'wt': -1, 'tat': -1},
{'pid': 227, 'art': 529, 'bt': 489, 'pri': 351, 'wt': -1, 'tat': -1},
{'pid': 228, 'art': 210, 'bt': 256, 'pri': 517, 'wt': -1, 'tat': -1},
{'pid': 229, 'art': 402, 'bt': 361, 'pri': 817, 'wt': -1, 'tat': -1},
{'pid': 230, 'art': 720, 'bt': 426, 'pri': 281, 'wt': -1, 'tat': -1},
{'pid': 231, 'art': 263, 'bt': 377, 'pri': 368, 'wt': -1, 'tat': -1},
{'pid': 232, 'art': 478, 'bt': 41, 'pri': 96, 'wt': -1, 'tat': -1},
{'pid': 233, 'art': 220, 'bt': 11, 'pri': 361, 'wt': -1, 'tat': -1},
{'pid': 234, 'art': 451, 'bt': 472, 'pri': 589, 'wt': -1, 'tat': -1},
{'pid': 235, 'art': 531, 'bt': 4, 'pri': 165, 'wt': -1, 'tat': -1},
{'pid': 236, 'art': 720, 'bt': 181, 'pri': 592, 'wt': -1, 'tat': -1},
{'pid': 237, 'art': 270, 'bt': 399, 'pri': 711, 'wt': -1, 'tat': -1},
{'pid': 238, 'art': 853, 'bt': 116, 'pri': 54, 'wt': -1, 'tat': -1},
{'pid': 239, 'art': 481, 'bt': 126, 'pri': 11, 'wt': -1, 'tat': -1},
{'pid': 240, 'art': 139, 'bt': 210, 'pri': 574, 'wt': -1, 'tat': -1},
{'pid': 241, 'art': 202, 'bt': 388, 'pri': 415, 'wt': -1, 'tat': -1},
{'pid': 242, 'art': 866, 'bt': 149, 'pri': 92, 'wt': -1, 'tat': -1},
{'pid': 243, 'art': 49, 'bt': 27, 'pri': 523, 'wt': -1, 'tat': -1},
{'pid': 244, 'art': 481, 'bt': 192, 'pri': 259, 'wt': -1, 'tat': -1},
{'pid': 245, 'art': 212, 'bt': 462, 'pri': 381, 'wt': -1, 'tat': -1},
{'pid': 246, 'art': 120, 'bt': 17, 'pri': 244, 'wt': -1, 'tat': -1},
{'pid': 247, 'art': 234, 'bt': 221, 'pri': 430, 'wt': -1, 'tat': -1},
{'pid': 248, 'art': 906, 'bt': 412, 'pri': 576, 'wt': -1, 'tat': -1},
{'pid': 249, 'art': 541, 'bt': 214, 'pri': 773, 'wt': -1, 'tat': -1},
{'pid': 250, 'art': 967, 'bt': 124, 'pri': 920, 'wt': -1, 'tat': -1},
{'pid': 251, 'art': 788, 'bt': 135, 'pri': 767, 'wt': -1, 'tat': -1},
{'pid': 252, 'art': 113, 'bt': 22, 'pri': 396, 'wt': -1, 'tat': -1},
{'pid': 253, 'art': 901, 'bt': 424, 'pri': 116, 'wt': -1, 'tat': -1},
{'pid': 254, 'art': 892, 'bt': 164, 'pri': 397, 'wt': -1, 'tat': -1},
{'pid': 255, 'art': 261, 'bt': 225, 'pri': 705, 'wt': -1, 'tat': -1},
{'pid': 256, 'art': 981, 'bt': 421, 'pri': 958, 'wt': -1, 'tat': -1},
{'pid': 257, 'art': 15, 'bt': 313, 'pri': 976, 'wt': -1, 'tat': -1},
{'pid': 258, 'art': 863, 'bt': 132, 'pri': 327, 'wt': -1, 'tat': -1},
{'pid': 259, 'art': 781, 'bt': 41, 'pri': 699, 'wt': -1, 'tat': -1},
{'pid': 260, 'art': 696, 'bt': 129, 'pri': 577, 'wt': -1, 'tat': -1},
{'pid': 261, 'art': 326, 'bt': 103, 'pri': 911, 'wt': -1, 'tat': -1},
{'pid': 262, 'art': 23, 'bt': 350, 'pri': 295, 'wt': -1, 'tat': -1},
{'pid': 263, 'art': 196, 'bt': 56, 'pri': 78, 'wt': -1, 'tat': -1},
{'pid': 264, 'art': 258, 'bt': 175, 'pri': 719, 'wt': -1, 'tat': -1},
{'pid': 265, 'art': 947, 'bt': 163, 'pri': 710, 'wt': -1, 'tat': -1},
{'pid': 266, 'art': 965, 'bt': 26, 'pri': 931, 'wt': -1, 'tat': -1},
{'pid': 267, 'art': 477, 'bt': 119, 'pri': 119, 'wt': -1, 'tat': -1},
{'pid': 268, 'art': 476, 'bt': 430, 'pri': 744, 'wt': -1, 'tat': -1},
{'pid': 269, 'art': 610, 'bt': 360, 'pri': 992, 'wt': -1, 'tat': -1},
{'pid': 270, 'art': 295, 'bt': 417, 'pri': 509, 'wt': -1, 'tat': -1},
{'pid': 271, 'art': 682, 'bt': 10, 'pri': 959, 'wt': -1, 'tat': -1},
{'pid': 272, 'art': 270, 'bt': 277, 'pri': 310, 'wt': -1, 'tat': -1},
{'pid': 273, 'art': 588, 'bt': 237, 'pri': 370, 'wt': -1, 'tat': -1},
{'pid': 274, 'art': 170, 'bt': 397, 'pri': 915, 'wt': -1, 'tat': -1},
{'pid': 275, 'art': 815, 'bt': 441, 'pri': 915, 'wt': -1, 'tat': -1},
{'pid': 276, 'art': 649, 'bt': 46, 'pri': 930, 'wt': -1, 'tat': -1},
{'pid': 277, 'art': 504, 'bt': 304, 'pri': 602, 'wt': -1, 'tat': -1},
{'pid': 278, 'art': 294, 'bt': 484, 'pri': 544, 'wt': -1, 'tat': -1},
{'pid': 279, 'art': 461, 'bt': 423, 'pri': 722, 'wt': -1, 'tat': -1},
{'pid': 280, 'art': 176, 'bt': 90, 'pri': 821, 'wt': -1, 'tat': -1},
{'pid': 281, 'art': 379, 'bt': 411, 'pri': 525, 'wt': -1, 'tat': -1},
{'pid': 282, 'art': 729, 'bt': 246, 'pri': 398, 'wt': -1, 'tat': -1},
{'pid': 283, 'art': 628, 'bt': 265, 'pri': 303, 'wt': -1, 'tat': -1},
{'pid': 284, 'art': 397, 'bt': 134, 'pri': 170, 'wt': -1, 'tat': -1},
{'pid': 285, 'art': 160, 'bt': 373, 'pri': 274, 'wt': -1, 'tat': -1},
{'pid': 286, 'art': 476, 'bt': 462, 'pri': 312, 'wt': -1, 'tat': -1},
{'pid': 287, 'art': 581, 'bt': 66, 'pri': 665, 'wt': -1, 'tat': -1},
{'pid': 288, 'art': 446, 'bt': 267, 'pri': 852, 'wt': -1, 'tat': -1},
{'pid': 289, 'art': 54, 'bt': 447, 'pri': 553, 'wt': -1, 'tat': -1},
{'pid': 290, 'art': 221, 'bt': 84, 'pri': 57, 'wt': -1, 'tat': -1},
{'pid': 291, 'art': 14, 'bt': 1, 'pri': 650, 'wt': -1, 'tat': -1},
{'pid': 292, 'art': 466, 'bt': 66, 'pri': 980, 'wt': -1, 'tat': -1},
{'pid': 293, 'art': 39, 'bt': 429, 'pri': 743, 'wt': -1, 'tat': -1},
{'pid': 294, 'art': 327, 'bt': 68, 'pri': 196, 'wt': -1, 'tat': -1},
{'pid': 295, 'art': 575, 'bt': 497, 'pri': 251, 'wt': -1, 'tat': -1},
{'pid': 296, 'art': 336, 'bt': 24, 'pri': 374, 'wt': -1, 'tat': -1},
{'pid': 297, 'art': 590, 'bt': 292, 'pri': 763, 'wt': -1, 'tat': -1},
{'pid': 298, 'art': 898, 'bt': 460, 'pri': 99, 'wt': -1, 'tat': -1},
{'pid': 299, 'art': 941, 'bt': 485, 'pri': 504, 'wt': -1, 'tat': -1},
{'pid': 300, 'art': 446, 'bt': 161, 'pri': 974, 'wt': -1, 'tat': -1},
{'pid': 301, 'art': 386, 'bt': 293, 'pri': 545, 'wt': -1, 'tat': -1},
{'pid': 302, 'art': 113, 'bt': 430, 'pri': 518, 'wt': -1, 'tat': -1},
{'pid': 303, 'art': 382, 'bt': 108, 'pri': 608, 'wt': -1, 'tat': -1},
{'pid': 304, 'art': 875, 'bt': 261, 'pri': 338, 'wt': -1, 'tat': -1},
{'pid': 305, 'art': 927, 'bt': 195, 'pri': 709, 'wt': -1, 'tat': -1},
{'pid': 306, 'art': 287, 'bt': 254, 'pri': 831, 'wt': -1, 'tat': -1},
{'pid': 307, 'art': 433, 'bt': 145, 'pri': 674, 'wt': -1, 'tat': -1},
{'pid': 308, 'art': 903, 'bt': 254, 'pri': 810, 'wt': -1, 'tat': -1},
{'pid': 309, 'art': 409, 'bt': 198, 'pri': 526, 'wt': -1, 'tat': -1},
{'pid': 310, 'art': 291, 'bt': 76, 'pri': 612, 'wt': -1, 'tat': -1},
{'pid': 311, 'art': 248, 'bt': 208, 'pri': 711, 'wt': -1, 'tat': -1},
{'pid': 312, 'art': 946, 'bt': 408, 'pri': 254, 'wt': -1, 'tat': -1},
{'pid': 313, 'art': 134, 'bt': 113, 'pri': 693, 'wt': -1, 'tat': -1},
{'pid': 314, 'art': 418, 'bt': 111, 'pri': 141, 'wt': -1, 'tat': -1},
{'pid': 315, 'art': 232, 'bt': 53, 'pri': 70, 'wt': -1, 'tat': -1},
{'pid': 316, 'art': 46, 'bt': 62, 'pri': 269, 'wt': -1, 'tat': -1},
{'pid': 317, 'art': 331, 'bt': 87, 'pri': 494, 'wt': -1, 'tat': -1},
{'pid': 318, 'art': 624, 'bt': 473, 'pri': 795, 'wt': -1, 'tat': -1},
{'pid': 319, 'art': 907, 'bt': 370, 'pri': 458, 'wt': -1, 'tat': -1},
{'pid': 320, 'art': 520, 'bt': 372, 'pri': 277, 'wt': -1, 'tat': -1},
{'pid': 321, 'art': 406, 'bt': 144, 'pri': 247, 'wt': -1, 'tat': -1},
{'pid': 322, 'art': 877, 'bt': 346, 'pri': 318, 'wt': -1, 'tat': -1},
{'pid': 323, 'art': 926, 'bt': 124, 'pri': 793, 'wt': -1, 'tat': -1},
{'pid': 324, 'art': 580, 'bt': 478, 'pri': 232, 'wt': -1, 'tat': -1},
{'pid': 325, 'art': 673, 'bt': 281, 'pri': 245, 'wt': -1, 'tat': -1},
{'pid': 326, 'art': 118, 'bt': 138, 'pri': 692, 'wt': -1, 'tat': -1},
{'pid': 327, 'art': 170, 'bt': 12, 'pri': 149, 'wt': -1, 'tat': -1},
{'pid': 328, 'art': 821, 'bt': 497, 'pri': 781, 'wt': -1, 'tat': -1},
{'pid': 329, 'art': 168, 'bt': 300, 'pri': 21, 'wt': -1, 'tat': -1},
{'pid': 330, 'art': 920, 'bt': 443, 'pri': 555, 'wt': -1, 'tat': -1},
{'pid': 331, 'art': 524, 'bt': 308, 'pri': 375, 'wt': -1, 'tat': -1},
{'pid': 332, 'art': 318, 'bt': 289, 'pri': 256, 'wt': -1, 'tat': -1},
{'pid': 333, 'art': 759, 'bt': 158, 'pri': 312, 'wt': -1, 'tat': -1},
{'pid': 334, 'art': 466, 'bt': 334, 'pri': 497, 'wt': -1, 'tat': -1},
{'pid': 335, 'art': 309, 'bt': 234, 'pri': 702, 'wt': -1, 'tat': -1},
{'pid': 336, 'art': 862, 'bt': 112, 'pri': 918, 'wt': -1, 'tat': -1},
{'pid': 337, 'art': 399, 'bt': 395, 'pri': 885, 'wt': -1, 'tat': -1},
{'pid': 338, 'art': 24, 'bt': 439, 'pri': 745, 'wt': -1, 'tat': -1},
{'pid': 339, 'art': 818, 'bt': 292, 'pri': 162, 'wt': -1, 'tat': -1},
{'pid': 340, 'art': 865, 'bt': 403, 'pri': 733, 'wt': -1, 'tat': -1},
{'pid': 341, 'art': 811, 'bt': 275, 'pri': 970, 'wt': -1, 'tat': -1},
{'pid': 342, 'art': 433, 'bt': 342, 'pri': 68, 'wt': -1, 'tat': -1},
{'pid': 343, 'art': 441, 'bt': 419, 'pri': 698, 'wt': -1, 'tat': -1},
{'pid': 344, 'art': 168, 'bt': 120, 'pri': 571, 'wt': -1, 'tat': -1},
{'pid': 345, 'art': 998, 'bt': 58, 'pri': 359, 'wt': -1, 'tat': -1},
{'pid': 346, 'art': 831, 'bt': 94, 'pri': 167, 'wt': -1, 'tat': -1},
{'pid': 347, 'art': 123, 'bt': 407, 'pri': 174, 'wt': -1, 'tat': -1},
{'pid': 348, 'art': 529, 'bt': 115, 'pri': 966, 'wt': -1, 'tat': -1},
{'pid': 349, 'art': 522, 'bt': 33, 'pri': 171, 'wt': -1, 'tat': -1},
{'pid': 350, 'art': 297, 'bt': 269, 'pri': 597, 'wt': -1, 'tat': -1},
{'pid': 351, 'art': 917, 'bt': 465, 'pri': 511, 'wt': -1, 'tat': -1},
{'pid': 352, 'art': 887, 'bt': 319, 'pri': 104, 'wt': -1, 'tat': -1},
{'pid': 353, 'art': 84, 'bt': 403, 'pri': 227, 'wt': -1, 'tat': -1},
{'pid': 354, 'art': 603, 'bt': 344, 'pri': 657, 'wt': -1, 'tat': -1},
{'pid': 355, 'art': 139, 'bt': 94, 'pri': 722, 'wt': -1, 'tat': -1},
{'pid': 356, 'art': 797, 'bt': 105, 'pri': 854, 'wt': -1, 'tat': -1},
{'pid': 357, 'art': 402, 'bt': 110, 'pri': 887, 'wt': -1, 'tat': -1},
{'pid': 358, 'art': 654, 'bt': 340, 'pri': 964, 'wt': -1, 'tat': -1},
{'pid': 359, 'art': 194, 'bt': 116, 'pri': 905, 'wt': -1, 'tat': -1},
{'pid': 360, 'art': 241, 'bt': 165, 'pri': 840, 'wt': -1, 'tat': -1},
{'pid': 361, 'art': 553, 'bt': 489, 'pri': 637, 'wt': -1, 'tat': -1},
{'pid': 362, 'art': 112, 'bt': 170, 'pri': 908, 'wt': -1, 'tat': -1},
{'pid': 363, 'art': 182, 'bt': 390, 'pri': 590, 'wt': -1, 'tat': -1},
{'pid': 364, 'art': 525, 'bt': 392, 'pri': 920, 'wt': -1, 'tat': -1},
{'pid': 365, 'art': 526, 'bt': 307, 'pri': 935, 'wt': -1, 'tat': -1},
{'pid': 366, 'art': 102, 'bt': 403, 'pri': 432, 'wt': -1, 'tat': -1},
{'pid': 367, 'art': 282, 'bt': 39, 'pri': 972, 'wt': -1, 'tat': -1},
{'pid': 368, 'art': 778, 'bt': 93, 'pri': 332, 'wt': -1, 'tat': -1},
{'pid': 369, 'art': 686, 'bt': 374, 'pri': 420, 'wt': -1, 'tat': -1},
{'pid': 370, 'art': 974, 'bt': 154, 'pri': 838, 'wt': -1, 'tat': -1},
{'pid': 371, 'art': 703, 'bt': 420, 'pri': 139, 'wt': -1, 'tat': -1},
{'pid': 372, 'art': 447, 'bt': 97, 'pri': 435, 'wt': -1, 'tat': -1},
{'pid': 373, 'art': 816, 'bt': 143, 'pri': 384, 'wt': -1, 'tat': -1},
{'pid': 374, 'art': 622, 'bt': 375, 'pri': 784, 'wt': -1, 'tat': -1},
{'pid': 375, 'art': 848, 'bt': 347, 'pri': 90, 'wt': -1, 'tat': -1},
{'pid': 376, 'art': 818, 'bt': 297, 'pri': 820, 'wt': -1, 'tat': -1},
{'pid': 377, 'art': 791, 'bt': 172, 'pri': 206, 'wt': -1, 'tat': -1},
{'pid': 378, 'art': 511, 'bt': 356, 'pri': 805, 'wt': -1, 'tat': -1},
{'pid': 379, 'art': 351, 'bt': 340, 'pri': 948, 'wt': -1, 'tat': -1},
{'pid': 380, 'art': 551, 'bt': 90, 'pri': 608, 'wt': -1, 'tat': -1},
{'pid': 381, 'art': 601, 'bt': 347, 'pri': 276, 'wt': -1, 'tat': -1},
{'pid': 382, 'art': 948, 'bt': 200, 'pri': 484, 'wt': -1, 'tat': -1},
{'pid': 383, 'art': 583, 'bt': 456, 'pri': 814, 'wt': -1, 'tat': -1},
{'pid': 384, 'art': 990, 'bt': 47, 'pri': 515, 'wt': -1, 'tat': -1},
{'pid': 385, 'art': 925, 'bt': 418, 'pri': 71, 'wt': -1, 'tat': -1},
{'pid': 386, 'art': 816, 'bt': 330, 'pri': 787, 'wt': -1, 'tat': -1},
{'pid': 387, 'art': 529, 'bt': 288, 'pri': 593, 'wt': -1, 'tat': -1},
{'pid': 388, 'art': 648, 'bt': 84, 'pri': 824, 'wt': -1, 'tat': -1},
{'pid': 389, 'art': 194, 'bt': 22, 'pri': 826, 'wt': -1, 'tat': -1},
{'pid': 390, 'art': 3, 'bt': 159, 'pri': 112, 'wt': -1, 'tat': -1},
{'pid': 391, 'art': 872, 'bt': 464, 'pri': 697, 'wt': -1, 'tat': -1},
{'pid': 392, 'art': 848, 'bt': 94, 'pri': 439, 'wt': -1, 'tat': -1},
{'pid': 393, 'art': 917, 'bt': 51, 'pri': 995, 'wt': -1, 'tat': -1},
{'pid': 394, 'art': 625, 'bt': 123, 'pri': 415, 'wt': -1, 'tat': -1},
{'pid': 395, 'art': 185, 'bt': 212, 'pri': 348, 'wt': -1, 'tat': -1},
{'pid': 396, 'art': 422, 'bt': 139, 'pri': 694, 'wt': -1, 'tat': -1},
{'pid': 397, 'art': 614, 'bt': 235, 'pri': 539, 'wt': -1, 'tat': -1},
{'pid': 398, 'art': 169, 'bt': 308, 'pri': 102, 'wt': -1, 'tat': -1},
{'pid': 399, 'art': 380, 'bt': 233, 'pri': 262, 'wt': -1, 'tat': -1},
{'pid': 400, 'art': 387, 'bt': 103, 'pri': 646, 'wt': -1, 'tat': -1},
{'pid': 401, 'art': 79, 'bt': 443, 'pri': 636, 'wt': -1, 'tat': -1},
{'pid': 402, 'art': 515, 'bt': 157, 'pri': 731, 'wt': -1, 'tat': -1},
{'pid': 403, 'art': 25, 'bt': 285, 'pri': 728, 'wt': -1, 'tat': -1},
{'pid': 404, 'art': 742, 'bt': 347, 'pri': 977, 'wt': -1, 'tat': -1},
{'pid': 405, 'art': 320, 'bt': 12, 'pri': 870, 'wt': -1, 'tat': -1},
{'pid': 406, 'art': 241, 'bt': 86, 'pri': 995, 'wt': -1, 'tat': -1},
{'pid': 407, 'art': 641, 'bt': 21, 'pri': 194, 'wt': -1, 'tat': -1},
{'pid': 408, 'art': 247, 'bt': 90, 'pri': 355, 'wt': -1, 'tat': -1},
{'pid': 409, 'art': 611, 'bt': 73, 'pri': 850, 'wt': -1, 'tat': -1},
{'pid': 410, 'art': 164, 'bt': 250, 'pri': 107, 'wt': -1, 'tat': -1},
{'pid': 411, 'art': 973, 'bt': 3, 'pri': 223, 'wt': -1, 'tat': -1},
{'pid': 412, 'art': 437, 'bt': 246, 'pri': 669, 'wt': -1, 'tat': -1},
{'pid': 413, 'art': 895, 'bt': 461, 'pri': 77, 'wt': -1, 'tat': -1},
{'pid': 414, 'art': 80, 'bt': 407, 'pri': 452, 'wt': -1, 'tat': -1},
{'pid': 415, 'art': 970, 'bt': 492, 'pri': 804, 'wt': -1, 'tat': -1},
{'pid': 416, 'art': 30, 'bt': 468, 'pri': 983, 'wt': -1, 'tat': -1},
{'pid': 417, 'art': 151, 'bt': 6, 'pri': 764, 'wt': -1, 'tat': -1},
{'pid': 418, 'art': 779, 'bt': 87, 'pri': 499, 'wt': -1, 'tat': -1},
{'pid': 419, 'art': 728, 'bt': 167, 'pri': 905, 'wt': -1, 'tat': -1},
{'pid': 420, 'art': 628, 'bt': 238, 'pri': 286, 'wt': -1, 'tat': -1},
{'pid': 421, 'art': 105, 'bt': 329, 'pri': 12, 'wt': -1, 'tat': -1},
{'pid': 422, 'art': 279, 'bt': 27, 'pri': 616, 'wt': -1, 'tat': -1},
{'pid': 423, 'art': 218, 'bt': 97, 'pri': 435, 'wt': -1, 'tat': -1},
{'pid': 424, 'art': 677, 'bt': 307, 'pri': 584, 'wt': -1, 'tat': -1},
{'pid': 425, 'art': 307, 'bt': 60, 'pri': 432, 'wt': -1, 'tat': -1},
{'pid': 426, 'art': 287, 'bt': 151, 'pri': 586, 'wt': -1, 'tat': -1},
{'pid': 427, 'art': 460, 'bt': 52, 'pri': 71, 'wt': -1, 'tat': -1},
{'pid': 428, 'art': 162, 'bt': 411, 'pri': 687, 'wt': -1, 'tat': -1},
{'pid': 429, 'art': 391, 'bt': 403, 'pri': 582, 'wt': -1, 'tat': -1},
{'pid': 430, 'art': 253, 'bt': 380, 'pri': 336, 'wt': -1, 'tat': -1},
{'pid': 431, 'art': 785, 'bt': 42, 'pri': 371, 'wt': -1, 'tat': -1},
{'pid': 432, 'art': 855, 'bt': 373, 'pri': 812, 'wt': -1, 'tat': -1},
{'pid': 433, 'art': 394, 'bt': 401, 'pri': 54, 'wt': -1, 'tat': -1},
{'pid': 434, 'art': 110, 'bt': 261, 'pri': 669, 'wt': -1, 'tat': -1},
{'pid': 435, 'art': 481, 'bt': 464, 'pri': 319, 'wt': -1, 'tat': -1},
{'pid': 436, 'art': 551, 'bt': 157, 'pri': 581, 'wt': -1, 'tat': -1},
{'pid': 437, 'art': 902, 'bt': 151, 'pri': 28, 'wt': -1, 'tat': -1},
{'pid': 438, 'art': 67, 'bt': 259, 'pri': 671, 'wt': -1, 'tat': -1},
{'pid': 439, 'art': 796, 'bt': 214, 'pri': 468, 'wt': -1, 'tat': -1},
{'pid': 440, 'art': 85, 'bt': 186, 'pri': 64, 'wt': -1, 'tat': -1},
{'pid': 441, 'art': 655, 'bt': 493, 'pri': 354, 'wt': -1, 'tat': -1},
{'pid': 442, 'art': 810, 'bt': 229, 'pri': 334, 'wt': -1, 'tat': -1},
{'pid': 443, 'art': 240, 'bt': 353, 'pri': 857, 'wt': -1, 'tat': -1},
{'pid': 444, 'art': 121, 'bt': 366, 'pri': 33, 'wt': -1, 'tat': -1},
{'pid': 445, 'art': 225, 'bt': 211, 'pri': 610, 'wt': -1, 'tat': -1},
{'pid': 446, 'art': 915, 'bt': 377, 'pri': 511, 'wt': -1, 'tat': -1},
{'pid': 447, 'art': 376, 'bt': 58, 'pri': 998, 'wt': -1, 'tat': -1},
{'pid': 448, 'art': 16, 'bt': 289, 'pri': 123, 'wt': -1, 'tat': -1},
{'pid': 449, 'art': 325, 'bt': 322, 'pri': 673, 'wt': -1, 'tat': -1},
{'pid': 450, 'art': 821, 'bt': 84, 'pri': 284, 'wt': -1, 'tat': -1},
{'pid': 451, 'art': 148, 'bt': 71, 'pri': 177, 'wt': -1, 'tat': -1},
{'pid': 452, 'art': 683, 'bt': 1, 'pri': 284, 'wt': -1, 'tat': -1},
{'pid': 453, 'art': 48, 'bt': 200, 'pri': 783, 'wt': -1, 'tat': -1},
{'pid': 454, 'art': 527, 'bt': 349, 'pri': 195, 'wt': -1, 'tat': -1},
{'pid': 455, 'art': 277, 'bt': 114, 'pri': 713, 'wt': -1, 'tat': -1},
{'pid': 456, 'art': 980, 'bt': 410, 'pri': 809, 'wt': -1, 'tat': -1},
{'pid': 457, 'art': 296, 'bt': 258, 'pri': 688, 'wt': -1, 'tat': -1},
{'pid': 458, 'art': 45, 'bt': 164, 'pri': 755, 'wt': -1, 'tat': -1},
{'pid': 459, 'art': 172, 'bt': 255, 'pri': 848, 'wt': -1, 'tat': -1},
{'pid': 460, 'art': 417, 'bt': 213, 'pri': 788, 'wt': -1, 'tat': -1},
{'pid': 461, 'art': 565, 'bt': 251, 'pri': 427, 'wt': -1, 'tat': -1},
{'pid': 462, 'art': 823, 'bt': 223, 'pri': 396, 'wt': -1, 'tat': -1},
{'pid': 463, 'art': 415, 'bt': 346, 'pri': 718, 'wt': -1, 'tat': -1},
{'pid': 464, 'art': 496, 'bt': 369, 'pri': 47, 'wt': -1, 'tat': -1},
{'pid': 465, 'art': 219, 'bt': 112, 'pri': 565, 'wt': -1, 'tat': -1},
{'pid': 466, 'art': 108, 'bt': 299, 'pri': 843, 'wt': -1, 'tat': -1},
{'pid': 467, 'art': 336, 'bt': 223, 'pri': 45, 'wt': -1, 'tat': -1},
{'pid': 468, 'art': 925, 'bt': 393, 'pri': 636, 'wt': -1, 'tat': -1},
{'pid': 469, 'art': 245, 'bt': 42, 'pri': 738, 'wt': -1, 'tat': -1},
{'pid': 470, 'art': 893, 'bt': 365, 'pri': 692, 'wt': -1, 'tat': -1},
{'pid': 471, 'art': 569, 'bt': 98, 'pri': 444, 'wt': -1, 'tat': -1},
{'pid': 472, 'art': 830, 'bt': 236, 'pri': 936, 'wt': -1, 'tat': -1},
{'pid': 473, 'art': 890, 'bt': 287, 'pri': 813, 'wt': -1, 'tat': -1},
{'pid': 474, 'art': 362, 'bt': 348, 'pri': 191, 'wt': -1, 'tat': -1},
{'pid': 475, 'art': 224, 'bt': 190, 'pri': 655, 'wt': -1, 'tat': -1},
{'pid': 476, 'art': 994, 'bt': 122, 'pri': 725, 'wt': -1, 'tat': -1},
{'pid': 477, 'art': 57, 'bt': 182, 'pri': 113, 'wt': -1, 'tat': -1},
{'pid': 478, 'art': 120, 'bt': 457, 'pri': 143, 'wt': -1, 'tat': -1},
{'pid': 479, 'art': 617, 'bt': 68, 'pri': 581, 'wt': -1, 'tat': -1},
{'pid': 480, 'art': 49, 'bt': 173, 'pri': 820, 'wt': -1, 'tat': -1},
{'pid': 481, 'art': 504, 'bt': 74, 'pri': 572, 'wt': -1, 'tat': -1},
{'pid': 482, 'art': 502, 'bt': 130, 'pri': 397, 'wt': -1, 'tat': -1},
{'pid': 483, 'art': 916, 'bt': 152, 'pri': 350, 'wt': -1, 'tat': -1},
{'pid': 484, 'art': 990, 'bt': 136, 'pri': 586, 'wt': -1, 'tat': -1},
{'pid': 485, 'art': 829, 'bt': 219, 'pri': 665, 'wt': -1, 'tat': -1},
{'pid': 486, 'art': 237, 'bt': 50, 'pri': 531, 'wt': -1, 'tat': -1},
{'pid': 487, 'art': 136, 'bt': 99, 'pri': 394, 'wt': -1, 'tat': -1},
{'pid': 488, 'art': 940, 'bt': 428, 'pri': 505, 'wt': -1, 'tat': -1},
{'pid': 489, 'art': 212, 'bt': 38, 'pri': 142, 'wt': -1, 'tat': -1},
{'pid': 490, 'art': 226, 'bt': 68, 'pri': 928, 'wt': -1, 'tat': -1},
{'pid': 491, 'art': 146, 'bt': 126, 'pri': 718, 'wt': -1, 'tat': -1},
{'pid': 492, 'art': 347, 'bt': 322, 'pri': 735, 'wt': -1, 'tat': -1},
{'pid': 493, 'art': 83, 'bt': 426, 'pri': 762, 'wt': -1, 'tat': -1},
{'pid': 494, 'art': 657, 'bt': 339, 'pri': 54, 'wt': -1, 'tat': -1},
{'pid': 495, 'art': 759, 'bt': 79, 'pri': 741, 'wt': -1, 'tat': -1},
{'pid': 496, 'art': 597, 'bt': 141, 'pri': 110, 'wt': -1, 'tat': -1},
{'pid': 497, 'art': 631, 'bt': 311, 'pri': 701, 'wt': -1, 'tat': -1},
{'pid': 498, 'art': 898, 'bt': 60, 'pri': 442, 'wt': -1, 'tat': -1},
{'pid': 499, 'art': 764, 'bt': 381, 'pri': 605, 'wt': -1, 'tat': -1},
{'pid': 500, 'art': 451, 'bt': 102, 'pri': 278, 'wt': -1, 'tat': -1}
]

export default myArray;
