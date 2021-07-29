<p align="center">
<img alt="logo" src="https://user-images.githubusercontent.com/68503014/108997592-1d876b80-76e3-11eb-81f7-098c58b186e0.png" width="400px"/>
</p>
<h2 align="center">기온 별 옷차림 추천 서비스인 <a href="https://www.weseason4.com">weSeason</a>을<br>모바일로 리팩토링 합니다!</h2>

## 진행상황

<details>
<summary>21.06.19</summary>

* 와이어프레임 적용<br>
react native expo를 통해 먼저 환경을 구축한 뒤, flex를 사용하여 와이어프레임을 짜보았다.

<p align="center">
<img src="https://user-images.githubusercontent.com/69492426/123285906-6bed2f80-d548-11eb-952e-2b3d7d0ddae3.jpg" width="400px"/>
</p>
</details>

<details>
<summary>21.06.21</summary>

* 디자인 초안 최종 완성<br>
figma를 이용해 디자인 초안을 완성했다. 수정한 이미지에 따라 css도 알려주고 비교적 작업을 관리하기도 용이하여 꽤 편했다.<br>
먼저 디자인을 다 완성한 뒤, 프레임을 짜야 했는데, 그 반대가 되서 초기 프레임을 다시 손 봐야 한다.

<p align="center">
<img src="https://user-images.githubusercontent.com/69492426/123287749-eff3e700-d549-11eb-9f7d-1bb6634e4c37.png" width="400"/>
</p>
</details>

<details>
<summary>21.06.24</summary>

* 배경 애니메이션 효과 구현<br>
전 프로젝트에는 css의 animation 속성을 주로 사용했는데, native에서는 Animated라는 자체적인 메소드를 제공한다. 낯설었지만, 막상 써보니 꽤 편리했다.<br>
기기 환경에 따라 구름들의 위치를 유기적으로 바꾸기 위해 Dimensions를 사용하기도 했다.

<p align="center">
<img src="https://user-images.githubusercontent.com/69492426/123289260-41e93c80-d54b-11eb-9404-66e542b3de8d.gif" width="400"/>
</p>
</details>

<details>
<summary>21.07.23</summary>
  
* 상단 부분 로고와 메뉴 추가<br>
로그인이나 다른 화면을 구성할 계획은 없지만, 추후에 추가할 것이 있다면 하기 편하게 하기 위해 환경을 셋팅했다.<br>
앱의 경우 url에 따라 router를 나눌 수 없으므로, navigation 라이브러리를 사용했다.<br>
라이브러리에서 제공하는 Drawer 기능을 통해 간단하게 사이드 메뉴를 구성했다.
  
<p align="center">
<img width="400" alt="스크린샷 2021-07-23 오후 11 26 35" src="https://user-images.githubusercontent.com/69492426/126798570-409971b2-bb59-406a-a327-e5c0abf053b6.png">
</p>
</details>

<details>
  
<summary>21.07.29</summary>
  
* 날씨 타이틀 부분 추가<br>
진짜 골치 아픈 부분이었다. 폰트 적용은 그렇다 치더라도 reactNativ에서는 글자에 border를 추가할 수 없었다.<br>
검색하다가 svg를 통해서 테두리를 적용할 수 있음을 확인하고 바로 적용했지만, 이번에는 폰트가 적용이 안되어서 난감했다.<br>
머리 싸매다가 그냥 테두리는 포기하고 체감 온도의 범위에 따라 온도 부분의 색을 달리 하자는 결론을 내렸다.
  
<p align="center">
<img width="400" alt="스크린샷 2021-07-29 오후 6 43 16" src="https://user-images.githubusercontent.com/69492426/127472061-1de6dd7b-9595-4e38-a2e7-a251225f55ab.png">
</p>
</details>
