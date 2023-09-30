

def fruitToBasket(fruits):
    hash_map={}
    l,res,total = 0,0,0

    for i in fruits:
        hash_map[i] = hash_map.get(i,0)+1
        total += 1
        while len(hash_map) >2:
            pointer = fruits[l]
            hash_map[pointer] -=1
            l +=1
            total -=1
            if not hash_map[pointer]:
                hash_map.pop(pointer)
        res = max(res,total)
    return res




print(fruitToBasket([1,2,1,3]))