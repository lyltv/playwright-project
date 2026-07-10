# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepage/register.spec.ts >> CyberBnB Register >> Should not create duplicate account when clicking register multiple times
- Location: tests/homepage/register.spec.ts:294:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.reload: Test timeout of 30000ms exceeded.
Call log:
  - waiting for navigation until "load"
    - navigated to "https://demo5.cybersoft.edu.vn/"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - link "Cyber Logo CyberSoft" [ref=e5]:
        - /url: /
        - img "Cyber Logo" [ref=e6]
        - generic [ref=e7]: CyberSoft
      - button [ref=e9] [cursor=pointer]:
        - img [ref=e10]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link "Home" [ref=e14]:
            - /url: /
        - listitem [ref=e15]:
          - link "About" [ref=e16]:
            - /url: /
        - listitem [ref=e17]:
          - link "Services" [ref=e18]:
            - /url: /
        - listitem [ref=e19]:
          - link "Pricing" [ref=e20]:
            - /url: "#"
        - listitem [ref=e21]:
          - link "Contact" [ref=e22]:
            - /url: "#"
  - generic [ref=e24]:
    - generic [ref=e25]: Your browser does not support the video tag.
    - generic [ref=e29]:
      - heading "Cyberbnb" [level=2] [ref=e32]
      - paragraph [ref=e33]: Belong anywhere
  - generic [ref=e37]:
    - generic [ref=e38]:
      - generic [ref=e39] [cursor=pointer]:
        - paragraph [ref=e40]: Địa điểm
        - paragraph [ref=e41]: Bạn sắp đi đâu?
      - paragraph [ref=e45] [cursor=pointer]: 06/07/2026 – 13/07/2026
      - generic [ref=e48] [cursor=pointer]:
        - paragraph [ref=e49]: Thêm khách
        - img "search" [ref=e51]:
          - img [ref=e52]
    - generic [ref=e54]:
      - button "Loại nơi ở" [ref=e55] [cursor=pointer]
      - button "Giá" [ref=e56] [cursor=pointer]
      - button "Đặt ngay" [ref=e57] [cursor=pointer]
      - button "Phòng và phòng ngủ" [ref=e58] [cursor=pointer]
      - button "Bộ lọc khác" [ref=e59] [cursor=pointer]
  - generic [ref=e61]:
    - generic [ref=e62]:
      - link "Hồ Chí Minh 15 phút lái xe" [ref=e63]:
        - /url: /rooms/ho-chi-minh
        - generic [ref=e67] [cursor=pointer]:
          - heading "Hồ Chí Minh" [level=2] [ref=e68]
          - paragraph [ref=e69]: 15 phút lái xe
      - link "Cần Thơ 3 giờ lái xe" [ref=e70]:
        - /url: /rooms/can-tho
        - generic [ref=e74] [cursor=pointer]:
          - heading "Cần Thơ" [level=2] [ref=e75]
          - paragraph [ref=e76]: 3 giờ lái xe
      - link "Nha Trang 6.5 giờ lái xe" [ref=e77]:
        - /url: /rooms/nha-trang
        - generic [ref=e81] [cursor=pointer]:
          - heading "Nha Trang" [level=2] [ref=e82]
          - paragraph [ref=e83]: 6.5 giờ lái xe
      - link "Hà Nội 15 phút lái xe" [ref=e84]:
        - /url: /rooms/ha-noi
        - generic [ref=e88] [cursor=pointer]:
          - heading "Hà Nội" [level=2] [ref=e89]
          - paragraph [ref=e90]: 15 phút lái xe
      - link "Phú Quốc 7.5 giờ lái xe" [ref=e91]:
        - /url: /rooms/phu-quoc
        - generic [ref=e95] [cursor=pointer]:
          - heading "Phú Quốc" [level=2] [ref=e96]
          - paragraph [ref=e97]: 7.5 giờ lái xe
      - link "Đà Nẵng 45 phút lái xe" [ref=e98]:
        - /url: /rooms/da-nang
        - generic [ref=e102] [cursor=pointer]:
          - heading "Đà Nẵng" [level=2] [ref=e103]
          - paragraph [ref=e104]: 45 phút lái xe
      - link "Đà Lạt 30 phút lái xe" [ref=e105]:
        - /url: /rooms/da-lat
        - generic [ref=e109] [cursor=pointer]:
          - heading "Đà Lạt" [level=2] [ref=e110]
          - paragraph [ref=e111]: 30 phút lái xe
      - link "Phan Thiết 5 giờ lái xe" [ref=e112]:
        - /url: /rooms/phan-thiet
        - generic [ref=e116] [cursor=pointer]:
          - heading "Phan Thiết" [level=2] [ref=e117]
          - paragraph [ref=e118]: 5 giờ lái xe
    - generic [ref=e119]:
      - heading "Ở bất cứ đâu" [level=1] [ref=e120]
      - generic [ref=e121]:
        - link "Toàn bộ nhà" [ref=e122]:
          - /url: /rooms/ho-chi-minh
          - generic [ref=e128] [cursor=pointer]: Toàn bộ nhà
        - link "Chỗ ở độc đáo" [ref=e129]:
          - /url: /rooms/nha-trang
          - generic [ref=e135] [cursor=pointer]: Chỗ ở độc đáo
        - link "Trang trại và thiên nhiên" [ref=e136]:
          - /url: /rooms/da-lat
          - generic [ref=e142] [cursor=pointer]: Trang trại và thiên nhiên
        - link "Cho phép mang theo thú cưng" [ref=e143]:
          - /url: /rooms/da-nang
          - generic [ref=e149] [cursor=pointer]: Cho phép mang theo thú cưng
  - generic [ref=e150]:
    - generic [ref=e151]:
      - generic [ref=e152]:
        - heading "Giới thiệu" [level=2] [ref=e153]
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "Phương thức hoạt động của Cyber" [ref=e156] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e157]:
            - link "Trang tin tức" [ref=e158] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e159]:
            - link "Nhà đầu tư" [ref=e160] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e161]:
            - link "Cyber Plus" [ref=e162] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e163]:
            - link "Cyber Luxe" [ref=e164] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e165]:
            - link "HotelTonight" [ref=e166] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e167]:
            - link "Cyber for Work" [ref=e168] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e169]:
            - link "Nhờ có Host, mọi điều đều có thể" [ref=e170] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e171]:
            - link "Cơ hội nghề nghiệp" [ref=e172] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e173]:
            - link "Thư của nhà sáng lập" [ref=e174] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e175]:
        - heading "Cộng đồng" [level=2] [ref=e176]
        - list [ref=e177]:
          - listitem [ref=e178]:
            - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e179] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e180]:
            - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e181] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e182]:
            - link "Đối tác liên kết Cyber" [ref=e183] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e184]:
            - link "Chỗ ở cho tuyến đầu" [ref=e185] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e186]:
            - link "Lượt giới thiệu của khách" [ref=e187] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e188]:
            - link "CyberSoft.edu.vn" [ref=e189] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e190]:
        - heading "Đón tiếp khách" [level=2] [ref=e191]
        - list [ref=e192]:
          - listitem [ref=e193]:
            - link "Cho thuê nhà" [ref=e194] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e195]:
            - link "Tổ chức Trải nghiệm trực tuyến" [ref=e196] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e197]:
            - link "Tổ chức Trải nghiệm" [ref=e198] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e199]:
            - link "Đón tiếp khách có trách nhiệm" [ref=e200] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e201]:
            - link "Trung tâm tài nguyên" [ref=e202] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e203]:
            - link "Trung tâm cộng đồng" [ref=e204] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e205]:
        - heading "Hỗ trợ" [level=2] [ref=e206]
        - list [ref=e207]:
          - listitem [ref=e208]:
            - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e209] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e210]:
            - link "Trung tâm trợ giúp" [ref=e211] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e212]:
            - link "Các tùy chọn hủy" [ref=e213] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e214]:
            - link "Hỗ trợ khu dân cư" [ref=e215] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e216]:
            - link "Tin cây và an toàn" [ref=e217] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
    - generic [ref=e219]:
      - generic [ref=e220]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
      - generic [ref=e221]:
        - img [ref=e223]
        - text: Tiếng Việt (VN)
        - text: USD
        - generic [ref=e225]: Hỗ trợ tài nguyên
```

# Test source

```ts
  226 |         // BUG: Web allows future birthday and registers successfully
  227 |         test.fail();
  228 | 
  229 |         await homePage.navigateSignUp();
  230 |         const dialog = page.getByRole('dialog');
  231 |         await expect(dialog.getByRole('heading', { name: HOMEPAGE.REGISTER.HEADING_ACCOUNT })).toBeVisible();
  232 | 
  233 |         await fillRegistrationForm(dialog, page, { birthday: '15/06/2030' });
  234 | 
  235 |         // Capture API response on registration click
  236 |         const [response] = await Promise.all([
  237 |             page.waitForResponse((res) => res.url().includes('/auth/signup')),
  238 |             dialog.getByRole('button', { name: HOMEPAGE.REGISTER.HEADING }).click(),
  239 |         ]);
  240 | 
  241 |         // Server should reject registration with future birthday
  242 |         expect(response.status()).not.toBe(200);
  243 |     });
  244 | 
  245 |     test('Should not register with invalid email format', async ({ homePage, page }) => {
  246 |         await homePage.navigateSignUp();
  247 |         const dialog = page.getByRole('dialog');
  248 | 
  249 |         await fillRegistrationForm(dialog, page, { email: 'emailsaidinhdang' });
  250 |         await dialog.getByRole('button', { name: HOMEPAGE.REGISTER.HEADING }).click();
  251 | 
  252 |         await expect(dialog.getByText(HOMEPAGE.LOGIN.ERR_INVALID_EMAIL)).toBeVisible();
  253 |         await expect(dialog.getByRole('heading', { name: HOMEPAGE.REGISTER.HEADING_ACCOUNT })).toBeVisible();
  254 |         await expect(page.getByText(HOMEPAGE.REGISTER.TOAST_SUCCESS)).toBeHidden();
  255 |     });
  256 | 
  257 |     test('Should not register with existing email', async ({ homePage, page }) => {
  258 |         await homePage.navigateSignUp();
  259 |         const dialog = page.getByRole('dialog');
  260 | 
  261 |         await fillRegistrationForm(dialog, page, { email: process.env.TEST_EMAIL! });
  262 |         await dialog.getByRole('button', { name: HOMEPAGE.REGISTER.HEADING }).click();
  263 | 
  264 |         // Show error toast for existing email
  265 |         await expect(page.getByText(HOMEPAGE.REGISTER.ERR_EMAIL_EXISTS)).toBeVisible({ timeout: 5000 });
  266 | 
  267 |         // Dialog remains open, registration failed
  268 |         await expect(dialog.getByRole('heading', { name: HOMEPAGE.REGISTER.HEADING_ACCOUNT })).toBeVisible();
  269 |         await expect(page.getByText(HOMEPAGE.REGISTER.TOAST_SUCCESS)).toBeHidden();
  270 |     });
  271 | 
  272 |     test('Should toggle password visibility with eye icon', async ({ homePage, page }) => {
  273 |         await homePage.navigateSignUp();
  274 |         const dialog = page.getByRole('dialog');
  275 |         await expect(dialog.getByRole('heading', { name: HOMEPAGE.REGISTER.HEADING_ACCOUNT })).toBeVisible();
  276 | 
  277 |         // Fill password
  278 |         const passwordInput = dialog.getByPlaceholder(HOMEPAGE.REGISTER.PLACEHOLDER_PASSWORD);
  279 |         await passwordInput.fill('MySecret123');
  280 | 
  281 |         // 1. Default: type="password" → password is hidden
  282 |         await expect(passwordInput).toHaveAttribute('type', 'password');
  283 | 
  284 |         // 2. Click eye icon → type is "text" → show password
  285 |         const eyeIcon = dialog.locator('.ant-input-password-icon');
  286 |         await eyeIcon.click();
  287 |         await expect(passwordInput).toHaveAttribute('type', 'text');
  288 | 
  289 |         // 3. Click again → type back to "password" → hide password again
  290 |         await eyeIcon.click();
  291 |         await expect(passwordInput).toHaveAttribute('type', 'password');
  292 |     });
  293 | 
  294 |     test('Should not create duplicate account when clicking register multiple times', async ({
  295 |         homePage,
  296 |         page,
  297 |     }) => {
  298 |         await homePage.navigateSignUp();
  299 |         const dialog = page.getByRole('dialog');
  300 |         const randomId = Date.now();
  301 |         const dupEmail = `dupuser${randomId}@gmail.com`;
  302 | 
  303 |         await fillRegistrationForm(dialog, page, {
  304 |             name: `Dup User ${randomId}`,
  305 |             email: dupEmail,
  306 |         });
  307 | 
  308 |         // Click Register button multiple times (spam click)
  309 |         const registerBtn = dialog.getByRole('button', { name: HOMEPAGE.REGISTER.HEADING });
  310 |         await Promise.all([
  311 |             registerBtn.click(),
  312 |             registerBtn.click({ delay: 50 }),
  313 |             registerBtn.click({ delay: 100 }),
  314 |         ]);
  315 | 
  316 |         await page.waitForTimeout(3000);
  317 | 
  318 |         const successToasts = page.getByText(HOMEPAGE.REGISTER.TOAST_SUCCESS);
  319 |         const successCount = await successToasts.count();
  320 |         expect(successCount).toBe(1);
  321 | 
  322 |         const duplicateToast = page.getByText(HOMEPAGE.REGISTER.ERR_EMAIL_EXISTS);
  323 |         await expect(duplicateToast).toBeHidden();
  324 | 
  325 |         // Retry registering with the same email → must show duplicate error
> 326 |         await page.reload();
      |                    ^ Error: page.reload: Test timeout of 30000ms exceeded.
  327 |         await homePage.navigateSignUp();
  328 |         const dialog2 = page.getByRole('dialog');
  329 | 
  330 |         await fillRegistrationForm(dialog2, page, {
  331 |             name: `Dup User ${randomId}`,
  332 |             email: dupEmail,
  333 |         });
  334 |         await dialog2.getByRole('button', { name: HOMEPAGE.REGISTER.HEADING }).click();
  335 | 
  336 |         await expect(page.getByText(HOMEPAGE.REGISTER.ERR_EMAIL_EXISTS)).toBeVisible({ timeout: 5000 });
  337 |     });
  338 | });
  339 | 
```