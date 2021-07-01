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
