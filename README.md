# GenshinData Parser
  A simple parser for [Dimbreath/GenshinData](https://github.com/Dimbreath/GenshinData) for Korean users.  
  This is the first time I implement Typescript, so the code could be very messy.

## Caution
  The project is Work in Progress. 
  Now Available
  + ```Character```
  + ```Weapon```
  + ```Material```
  + ```Cook```

## How to
 + clone the repo with submodules. use ```--recursive``` flag or use ```submodule update --init``` after cloning.
  ```
  git clone --recursive URL_HERE
  ```
 + ```npm run build```  
   - It will automatically run prebuild step.
 + ```npm run start```  
   - It will extract all of parsed json files.

## To Do
- [ ] 성유물 관련 정보 파싱
- [ ] 아이템 획득 가능 요일 정보 추가
- [x]  캐릭터, 무기, 아이템 간에 간략한 id reference 구현
- [ ] 하우징 아이템, 도서 정보 등 기타 다른 정보 파싱