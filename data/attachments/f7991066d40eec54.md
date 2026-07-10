# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/profile.spec.ts >> Dashboard - Update Profile >> UPDATE_PROFILE_13: Should show error for future date of birth
- Location: tests/dashboard/profile.spec.ts:268:9

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not 200
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - img [ref=e4]
    - navigation [ref=e10]:
      - generic [ref=e11]:
        - link "Cyber Logo CyberSoft" [ref=e12] [cursor=pointer]:
          - /url: /
          - img "Cyber Logo" [ref=e13]
          - generic [ref=e14]: CyberSoft
        - button "Open user menu Quyên Cập Nhật" [ref=e16] [cursor=pointer]:
          - generic [ref=e17]: Open user menu
          - img [ref=e18]
          - generic [ref=e19]: Quyên Cập Nhật
        - list [ref=e21]:
          - listitem [ref=e22]:
            - link "Home" [ref=e23] [cursor=pointer]:
              - /url: /
          - listitem [ref=e24]:
            - link "About" [ref=e25] [cursor=pointer]:
              - /url: /info-user
          - listitem [ref=e26]:
            - link "Services" [ref=e27] [cursor=pointer]:
              - /url: /info-user
          - listitem [ref=e28]:
            - link "Pricing" [ref=e29] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e30]:
            - link "Contact" [ref=e31] [cursor=pointer]:
              - /url: "#"
    - paragraph [ref=e36]: Thông tin người dùng Quyên Cập Nhật
    - generic [ref=e37]:
      - generic [ref=e39]:
        - button "Cập nhật ảnh" [ref=e42] [cursor=pointer]
        - generic [ref=e43]:
          - paragraph [ref=e45]: Xác minh danh tính
          - paragraph [ref=e46]: Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
          - button "Nhận huy hiệu" [ref=e47] [cursor=pointer]:
            - generic [ref=e48]: Nhận huy hiệu
          - paragraph [ref=e50]: Quyên Cập Nhật đã xác nhận
          - paragraph [ref=e51]:
            - img [ref=e53]
            - text: Địa chỉ email
      - generic [ref=e55]:
        - paragraph [ref=e56]: Xin chào, tôi là Quyên Cập Nhật
        - paragraph [ref=e57]: Bắt đầu tham gia vào 2023
        - button "Chỉnh sửa hồ sơ" [ref=e58] [cursor=pointer]
        - heading "Phòng đã thuê" [level=1] [ref=e59]
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e64]:
              - heading [level=3] [ref=e65]
              - list [ref=e66]:
                - listitem [ref=e67]
                - listitem [ref=e68]
                - listitem [ref=e69]
            - generic [ref=e70]:
              - generic [ref=e73]:
                - heading [level=3] [ref=e74]
                - list [ref=e75]:
                  - listitem [ref=e76]
                  - listitem [ref=e77]
                  - listitem [ref=e78]
              - generic [ref=e81]:
                - heading [level=3] [ref=e82]
                - list [ref=e83]:
                  - listitem [ref=e84]
                  - listitem [ref=e85]
                  - listitem [ref=e86]
              - generic [ref=e89]:
                - heading [level=3] [ref=e90]
                - list [ref=e91]:
                  - listitem [ref=e92]
                  - listitem [ref=e93]
                  - listitem [ref=e94]
          - generic [ref=e96]:
            - generic [ref=e99]:
              - heading [level=3] [ref=e100]
              - list [ref=e101]:
                - listitem [ref=e102]
                - listitem [ref=e103]
                - listitem [ref=e104]
            - generic [ref=e105]:
              - generic [ref=e108]:
                - heading [level=3] [ref=e109]
                - list [ref=e110]:
                  - listitem [ref=e111]
                  - listitem [ref=e112]
                  - listitem [ref=e113]
              - generic [ref=e116]:
                - heading [level=3] [ref=e117]
                - list [ref=e118]:
                  - listitem [ref=e119]
                  - listitem [ref=e120]
                  - listitem [ref=e121]
              - generic [ref=e124]:
                - heading [level=3] [ref=e125]
                - list [ref=e126]:
                  - listitem [ref=e127]
                  - listitem [ref=e128]
                  - listitem [ref=e129]
    - generic [ref=e130]:
      - generic [ref=e131]:
        - generic [ref=e132]:
          - heading "Giới thiệu" [level=2] [ref=e133]
          - list [ref=e134]:
            - listitem [ref=e135]:
              - link "Phương thức hoạt động của Cyber" [ref=e136] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e137]:
              - link "Trang tin tức" [ref=e138] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e139]:
              - link "Nhà đầu tư" [ref=e140] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e141]:
              - link "Cyber Plus" [ref=e142] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e143]:
              - link "Cyber Luxe" [ref=e144] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e145]:
              - link "HotelTonight" [ref=e146] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e147]:
              - link "Cyber for Work" [ref=e148] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e149]:
              - link "Nhờ có Host, mọi điều đều có thể" [ref=e150] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e151]:
              - link "Cơ hội nghề nghiệp" [ref=e152] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e153]:
              - link "Thư của nhà sáng lập" [ref=e154] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e155]:
          - heading "Cộng đồng" [level=2] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e159] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e160]:
              - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e161] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e162]:
              - link "Đối tác liên kết Cyber" [ref=e163] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e164]:
              - link "Chỗ ở cho tuyến đầu" [ref=e165] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e166]:
              - link "Lượt giới thiệu của khách" [ref=e167] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e168]:
              - link "CyberSoft.edu.vn" [ref=e169] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e170]:
          - heading "Đón tiếp khách" [level=2] [ref=e171]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "Cho thuê nhà" [ref=e174] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e175]:
              - link "Tổ chức Trải nghiệm trực tuyến" [ref=e176] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e177]:
              - link "Tổ chức Trải nghiệm" [ref=e178] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e179]:
              - link "Đón tiếp khách có trách nhiệm" [ref=e180] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e181]:
              - link "Trung tâm tài nguyên" [ref=e182] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e183]:
              - link "Trung tâm cộng đồng" [ref=e184] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e185]:
          - heading "Hỗ trợ" [level=2] [ref=e186]
          - list [ref=e187]:
            - listitem [ref=e188]:
              - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e189] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e190]:
              - link "Trung tâm trợ giúp" [ref=e191] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e192]:
              - link "Các tùy chọn hủy" [ref=e193] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e194]:
              - link "Hỗ trợ khu dân cư" [ref=e195] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e196]:
              - link "Tin cây và an toàn" [ref=e197] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
      - generic [ref=e199]:
        - generic [ref=e200]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
        - generic [ref=e201]:
          - img [ref=e203]
          - text: Tiếng Việt (VN)
          - text: USD
          - generic [ref=e205]: Hỗ trợ tài nguyên
  - img [ref=e207] [cursor=pointer]
  - generic [ref=e211]:
    - dialog "Chỉnh sửa hồ sơ":
      - generic:
        - button "Close":
          - generic:
            - img "close":
              - img
        - generic:
          - generic: Chỉnh sửa hồ sơ
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic "Email": "* Email"
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - textbox "vidu@gmail.com": string@gmail.com
                                - generic:
                                  - button "close-circle":
                                    - img "close-circle":
                                      - img
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic "Họ tên":
                            - text: "* Họ tên"
                            - img "question-circle":
                              - img
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - textbox "* Họ tên question-circle":
                                  - /placeholder: Nguyễn Văn A
                                  - text: Quyên Cập Nhật
                                - generic:
                                  - button "close-circle":
                                    - img "close-circle":
                                      - img
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic "Số điện thoại": "* Số điện thoại"
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - textbox "* Số điện thoại":
                                  - /placeholder: 0903 123 123
                                  - text: "0999888777"
                                - generic:
                                  - button "close-circle":
                                    - img "close-circle":
                                      - img
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic "Ngày sinh": "* Ngày sinh"
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - textbox "* Ngày sinh":
                                    - /placeholder: Chọn ngày sinh
                                    - text: 15/06/2030
                                  - generic:
                                    - img "calendar":
                                      - img
                                  - button "close-circle":
                                    - img "close-circle":
                                      - img
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - generic "Giới tính": "* Giới tính"
                        - generic:
                          - generic:
                            - generic:
                              - generic:
                                - generic:
                                  - generic:
                                    - combobox "* Giới tính"
                                  - generic "Nữ"
                                - generic:
                                  - img:
                                    - img
                                - generic:
                                  - img:
                                    - img
        - generic:
          - generic:
            - generic:
              - button "Cập nhật" [active]:
                - generic: Cập nhật
  - generic [ref=e213]:
    - img "check-circle" [ref=e214]:
      - img [ref=e215]
    - text: Cập nhật thông tin thành công
```

# Test source

```ts
  202 |         await dashboardPage.openProfileDialog();
  203 | 
  204 |         const dialog = page.getByRole('dialog');
  205 |         await dialog.locator('#phone').clear();
  206 |         await dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click();
  207 | 
  208 |         await expect(dialog.getByText(DASHBOARD.PROFILE.ERR_PHONE_EMPTY)).toBeVisible();
  209 |     });
  210 | 
  211 |     test('UPDATE_PROFILE_10: Should show error for incorrect phone format', async ({
  212 |         homePage,
  213 |         dashboardPage,
  214 |         page,
  215 |     }) => {
  216 |         await dashboardPage.loginAndGotoDashboard(homePage);
  217 |         await dashboardPage.openProfileDialog();
  218 | 
  219 |         const dialog = page.getByRole('dialog');
  220 |         await dialog.locator('#phone').clear();
  221 |         await dialog.locator('#phone').fill('abc1234567');
  222 |         await dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click();
  223 | 
  224 |         await expect(dialog.getByText(DASHBOARD.PROFILE.ERR_PHONE_INVALID)).toBeVisible();
  225 |     });
  226 | 
  227 |     test('UPDATE_PROFILE_11: Should show error for incorrect phone length', async ({
  228 |         homePage,
  229 |         dashboardPage,
  230 |         page,
  231 |     }) => {
  232 |         // BUG: Allows updating phone with invalid length
  233 |         // test.fail();
  234 | 
  235 |         await dashboardPage.loginAndGotoDashboard(homePage);
  236 |         await dashboardPage.openProfileDialog();
  237 | 
  238 |         const dialog = page.getByRole('dialog');
  239 |         await dialog.locator('#phone').clear();
  240 |         await dialog.locator('#phone').fill('0123');
  241 |         await dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click();
  242 | 
  243 |         await expect(dialog.getByText(DASHBOARD.PROFILE.ERR_PHONE_INVALID)).toBeVisible();
  244 |     });
  245 | 
  246 |     test('UPDATE_PROFILE_12: Should show error when birthday is blank', async ({
  247 |         homePage,
  248 |         dashboardPage,
  249 |         page,
  250 |     }) => {
  251 |         await dashboardPage.loginAndGotoDashboard(homePage);
  252 |         await dashboardPage.openProfileDialog();
  253 | 
  254 |         const dialog = page.getByRole('dialog');
  255 |         const birthdayInput = dialog.locator('#birthday');
  256 |         // Focus → select all → delete → close picker
  257 |         await birthdayInput.click();
  258 |         await page.keyboard.press('Meta+a');
  259 |         await page.keyboard.press('Backspace');
  260 |         // Close picker by clicking dialog heading
  261 |         await dialog.getByText(DASHBOARD.PROFILE.HEADING_EDIT).click();
  262 |         await page.waitForTimeout(300);
  263 |         await dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click();
  264 | 
  265 |         await expect(dialog.getByText(DASHBOARD.PROFILE.ERR_BIRTHDAY_EMPTY).last()).toBeVisible();
  266 |     });
  267 | 
  268 |     test('UPDATE_PROFILE_13: Should show error for future date of birth', async ({
  269 |         homePage,
  270 |         dashboardPage,
  271 |         page,
  272 |     }) => {
  273 |         // BUG: Web allows future birthday update (server returns 200)
  274 |         test.fail();
  275 | 
  276 |         await dashboardPage.loginAndGotoDashboard(homePage);
  277 |         await dashboardPage.openProfileDialog();
  278 | 
  279 |         const dialog = page.getByRole('dialog');
  280 | 
  281 |         // Save old birthday to restore
  282 |         const birthdayInput = dialog.locator('#birthday');
  283 |         const oldBirthday = await birthdayInput.inputValue();
  284 | 
  285 |         // Type future birthday
  286 |         await birthdayInput.click();
  287 |         await page.keyboard.press('Meta+a');
  288 |         await page.keyboard.type('15/06/2030');
  289 |         await page.keyboard.press('Enter');
  290 |         await dialog.getByText(DASHBOARD.PROFILE.HEADING_EDIT).click();
  291 |         await page.waitForTimeout(300);
  292 | 
  293 |         // Capture API response
  294 |         const [response] = await Promise.all([
  295 |             page.waitForResponse(
  296 |                 (res) => res.url().includes('/api/users/') && res.request().method() === 'PUT'
  297 |             ),
  298 |             dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click(),
  299 |         ]);
  300 | 
  301 |         // Server must reject future birthday (status !== 200)
> 302 |         expect(response.status()).not.toBe(200);
      |                                       ^ Error: expect(received).not.toBe(expected) // Object.is equality
  303 | 
  304 |         // Restore old birthday if server accepts it (bug case)
  305 |         if (response.status() === 200 && oldBirthday) {
  306 |             await birthdayInput.click();
  307 |             await page.keyboard.press('Meta+a');
  308 |             await page.keyboard.type(oldBirthday);
  309 |             await page.keyboard.press('Enter');
  310 |             await dialog.getByText(DASHBOARD.PROFILE.HEADING_EDIT).click();
  311 |             await page.waitForTimeout(300);
  312 |             await dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click();
  313 |             await page.waitForTimeout(1000);
  314 |         }
  315 |     });
  316 | 
  317 |     test('UPDATE_PROFILE_14: Should show error when gender is not selected', async ({
  318 |         homePage,
  319 |         dashboardPage,
  320 |         page,
  321 |     }) => {
  322 |         // BUG: No error message displayed when gender is not selected
  323 |         // test.fail();
  324 | 
  325 |         await dashboardPage.loginAndGotoDashboard(homePage);
  326 |         await dashboardPage.openProfileDialog();
  327 | 
  328 |         const dialog = page.getByRole('dialog');
  329 |         // Clear gender selection if possible
  330 |         const genderSelect = dialog.locator('.ant-select-clear');
  331 |         if (await genderSelect.isVisible()) {
  332 |             await genderSelect.click();
  333 |         }
  334 |         await dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click();
  335 | 
  336 |         await expect(dialog.getByText(DASHBOARD.PROFILE.ERR_GENDER_EMPTY)).toBeVisible();
  337 |     });
  338 | 
  339 |     test('UPDATE_PROFILE_15: Should update successfully with no data changed', async ({
  340 |         homePage,
  341 |         dashboardPage,
  342 |         page,
  343 |     }) => {
  344 |         await dashboardPage.loginAndGotoDashboard(homePage);
  345 |         await dashboardPage.openProfileDialog();
  346 | 
  347 |         const dialog = page.getByRole('dialog');
  348 |         await dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click();
  349 | 
  350 |         await expect(page.getByText(DASHBOARD.PROFILE.TOAST_SUCCESS)).toBeVisible({
  351 |             timeout: 5000,
  352 |         });
  353 |     });
  354 | 
  355 |     test('UPDATE_PROFILE_16: Should handle multiple consecutive update clicks', async ({
  356 |         homePage,
  357 |         dashboardPage,
  358 |         page,
  359 |     }) => {
  360 |         await dashboardPage.loginAndGotoDashboard(homePage);
  361 |         await dashboardPage.openProfileDialog();
  362 | 
  363 |         const dialog = page.getByRole('dialog');
  364 |         const updateBtn = dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE });
  365 | 
  366 |         await Promise.all([updateBtn.click(), updateBtn.click({ delay: 50 })]);
  367 | 
  368 |         await expect(page.getByText(DASHBOARD.PROFILE.TOAST_SUCCESS)).toBeVisible({
  369 |             timeout: 5000,
  370 |         });
  371 |     });
  372 | 
  373 |     test('UPDATE_PROFILE_17: Should persist data after page refresh', async ({
  374 |         homePage,
  375 |         dashboardPage,
  376 |         page,
  377 |     }) => {
  378 |         await dashboardPage.loginAndGotoDashboard(homePage);
  379 |         await dashboardPage.openProfileDialog();
  380 | 
  381 |         const dialog = page.getByRole('dialog');
  382 |         const oldName = await dialog.locator('#name').inputValue();
  383 |         const tempName = 'Tên Kiểm Tra Refresh';
  384 | 
  385 |         await dialog.locator('#name').clear();
  386 |         await dialog.locator('#name').fill(tempName);
  387 | 
  388 |         const [updateRes] = await Promise.all([
  389 |             page.waitForResponse(
  390 |                 (res) => res.url().includes('/api/users/') && res.request().method() === 'PUT'
  391 |             ),
  392 |             dialog.getByRole('button', { name: DASHBOARD.PROFILE.BTN_UPDATE }).click(),
  393 |         ]);
  394 |         expect(updateRes.status()).toBe(200);
  395 | 
  396 |         await expect(dialog).toBeHidden({ timeout: 5000 });
  397 | 
  398 |         // Refresh page
  399 |         await page.reload();
  400 |         await page.waitForLoadState('domcontentloaded');
  401 | 
  402 |         await dashboardPage.openProfileDialog();
```