# π λ΄μΌμ μ§
![image](https://user-images.githubusercontent.com/97380925/210776138-baa840ad-324b-478f-8860-4e7e78f4611d.png)
![image](https://user-images.githubusercontent.com/97380925/210776258-c40f3bee-8f3d-4b02-b878-ecfcc751ee07.png)


### 1. GNB

- λ‘κ·ΈμΈμ νμ§ μμ κ²½μ°

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="κ²μμ°½ μ΄κΈ° λ²νΌ"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button is-cart"
    aria-label="μ₯λ°κ΅¬λλ‘ νμ΄μ§λ‘ μ΄λ, 5κ°μ μνμ΄ λ΄κ²¨μμ΅λλ€."
  >
    <i class="ic-cart"></i>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="/">λ‘κ·ΈμΈ</a>
    <a href="/">νμκ°μ</a>
  </div>
</div>
```

- λ‘κ·ΈμΈμ νμ κ²½μ°

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="κ²μμ°½ μ΄κΈ° λ²νΌ"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="μ€ν¬λ©λΆ νμ΄μ§λ‘ μ΄λ"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="λ΄ μμ νμ΄μ§λ‘ μ΄λ"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button is-cart"
    aria-label="μ₯λ°κ΅¬λ νμ΄μ§λ‘ μ΄λ, 5κ°μ μνμ΄ λ΄κ²¨μμ΅λλ€."
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="λ§μ΄λ©λ΄ μ΄κΈ° λ²νΌ"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="μ¬λ¬λΌ μμ μ¨" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- λ‘κ·ΈμΈμ νμ§ μμ κ²½μ°

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">λ‘κ·ΈμΈ</a>
  <a class="btn-primary btn-40" href="/">νμκ°μ</a>
</div>
```

- λ‘κ·ΈμΈμ νμ κ²½μ°c

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="μ¬λ¬λΌ μμ μ¨" />
    </div>
    <strong class="username"
      >μ¬λ¬λΌμ¬λ¬λΌμ¬λ¬λΌμ¬λ¬λΌμ¬λ¬λΌμ¬λ¬λΌμ¬λ¬λΌμ¬λ¬λΌμ¬λ¬λΌ</strong
    >
  </a>
</div>
```
