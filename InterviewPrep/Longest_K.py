#Returen the longest substring of s 
# s ="aaabb" k=3
# s ="ababbc" k=2

# aaa b ccczee, k =2
# {a:3,b:1,c:3,z:1,e:2}
# aabccc 2 

def longest_k(s,k):
    hash_map = {}
    for i in s:
        hash_map[i] = hash_map.get(i,0) + 1
    for j in hash_map: # {a:2,b:1,c:3}
        if hash_map[j] <k:
          max_value = 0
          for sub in s.split(j): 
              max_value = max(max_value,longest_k(sub,k))
          return max_value
    return len(s)       

print(longest_k("aabccc",2))
