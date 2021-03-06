# Slack Clone (React JS practice)

## 1. Stack used

1. React JS 17.0.2
2. Firebase 9.3.0
3. React-router-dom
4. Context API
5. Universal-cookie

<br/>

### 2021.11.07

- 현재 firebase 동기화 문제
  
  - 채팅 동기화 문제
  - 채널 동기화 문제 
  
  <br/>
  
- 채널을 데이터베이스로 부터 가져오게 될 때, 사용자가 입력한 순서대로 가져오지 않는 문제

<br/>

### 2021.11.17

* firebase 동기화 문제 해결

  * firebase은 동기화를 하고 있었는데, 애플리케이션에서 이를 반영하지 않았음.
  * 이를 해결하기 위해, `useEffect`의 2번째 인수에 실시간으로 변하는 변수들을 할당했음.(e.g.`messages`, `channels`) 

  <br/>

* 채널을 데이터베이스로부터 가져오게 될 때, 사용자가 입력한 순서대로 가져오지 않는 문제 해결

  * `firebase`에서 사용자가 입력한 순서대로 저장하지 않았음. 따라서 이를 해결하기 위해, 사용자가 채널을 생성한 시간을 필드에 추가했음. 그리고 채널을 가져올 때, 생성 시간에 따른 순서대로 가져와서 애플리케이션에 반영했음.

<br/>

### 2021.11.19

* 쿠키 설정 완료

  * 이제 `F5`해도 로그인 화면으로 안감
  * 기존에 사용하던 Context API를 이용하여 쿠키를 전역 객체로 등록
  * `useEffect`를 이용하여, 쿠키가 있으면 전역 객체 `user`에 등록하여 사용 

  
