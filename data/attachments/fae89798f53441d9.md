# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/profile.spec.ts >> Dashboard - Update Profile >> UPDATE_PROFILE_13: Should show error for future date of birth
- Location: tests/dashboard/profile.spec.ts:265:9

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
  199 |         await dashboardPage.openProfileDialog();
  200 | 
  201 |         const dialog = page.getByRole('dialog');
  202 |         await dialog.locator('#phone').clear();
  203 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  204 | 
  205 |         await expect(dialog.getByText('Vui lòng nhập số điện thoại!')).toBeVisible();
  206 |     });
  207 | 
  208 |     test('UPDATE_PROFILE_10: Should show error for incorrect phone format', async ({
  209 |         homePage,
  210 |         dashboardPage,
  211 |         page,
  212 |     }) => {
  213 |         await dashboardPage.loginAndGotoDashboard(homePage);
  214 |         await dashboardPage.openProfileDialog();
  215 | 
  216 |         const dialog = page.getByRole('dialog');
  217 |         await dialog.locator('#phone').clear();
  218 |         await dialog.locator('#phone').fill('abc1234567');
  219 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  220 | 
  221 |         await expect(dialog.getByText('Sai định dạng số điện thoại!')).toBeVisible();
  222 |     });
  223 | 
  224 |     test('UPDATE_PROFILE_11: Should show error for incorrect phone length', async ({
  225 |         homePage,
  226 |         dashboardPage,
  227 |         page,
  228 |     }) => {
  229 |         // BUG: Cho phép cập nhật số điện thoại sai độ dài
  230 |         test.fail();
  231 | 
  232 |         await dashboardPage.loginAndGotoDashboard(homePage);
  233 |         await dashboardPage.openProfileDialog();
  234 | 
  235 |         const dialog = page.getByRole('dialog');
  236 |         await dialog.locator('#phone').clear();
  237 |         await dialog.locator('#phone').fill('0123');
  238 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  239 | 
  240 |         await expect(dialog.getByText('Sai định dạng số điện thoại!')).toBeVisible();
  241 |     });
  242 | 
  243 |     test('UPDATE_PROFILE_12: Should show error when birthday is blank', async ({
  244 |         homePage,
  245 |         dashboardPage,
  246 |         page,
  247 |     }) => {
  248 |         await dashboardPage.loginAndGotoDashboard(homePage);
  249 |         await dashboardPage.openProfileDialog();
  250 | 
  251 |         const dialog = page.getByRole('dialog');
  252 |         const birthdayInput = dialog.locator('#birthday');
  253 |         // Focus → select all → delete → close picker
  254 |         await birthdayInput.click();
  255 |         await page.keyboard.press('Meta+a');
  256 |         await page.keyboard.press('Backspace');
  257 |         // Đóng picker bằng click vào tiêu đề dialog
  258 |         await dialog.getByText('Chỉnh sửa hồ sơ').click();
  259 |         await page.waitForTimeout(300);
  260 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  261 | 
  262 |         await expect(dialog.getByText(/ngày sinh/i).last()).toBeVisible();
  263 |     });
  264 | 
  265 |     test('UPDATE_PROFILE_13: Should show error for future date of birth', async ({
  266 |         homePage,
  267 |         dashboardPage,
  268 |         page,
  269 |     }) => {
  270 |         // BUG: Web cho phép cập nhật ngày sinh tương lai (server trả 200)
  271 |         test.fail();
  272 | 
  273 |         await dashboardPage.loginAndGotoDashboard(homePage);
  274 |         await dashboardPage.openProfileDialog();
  275 | 
  276 |         const dialog = page.getByRole('dialog');
  277 | 
  278 |         // Lưu ngày sinh cũ để restore
  279 |         const birthdayInput = dialog.locator('#birthday');
  280 |         const oldBirthday = await birthdayInput.inputValue();
  281 | 
  282 |         // Nhập ngày sinh tương lai
  283 |         await birthdayInput.click();
  284 |         await page.keyboard.press('Meta+a');
  285 |         await page.keyboard.type('15/06/2030');
  286 |         await page.keyboard.press('Enter');
  287 |         await dialog.getByText('Chỉnh sửa hồ sơ').click();
  288 |         await page.waitForTimeout(300);
  289 | 
  290 |         // Bắt API response
  291 |         const [response] = await Promise.all([
  292 |             page.waitForResponse(
  293 |                 (res) => res.url().includes('/api/users/') && res.request().method() === 'PUT'
  294 |             ),
  295 |             dialog.getByRole('button', { name: 'Cập nhật' }).click(),
  296 |         ]);
  297 | 
  298 |         // Server phải từ chối ngày sinh tương lai (status !== 200)
> 299 |         expect(response.status()).not.toBe(200);
      |                                       ^ Error: expect(received).not.toBe(expected) // Object.is equality
  300 | 
  301 |         // Restore ngày sinh cũ nếu server chấp nhận (bug case)
  302 |         if (response.status() === 200 && oldBirthday) {
  303 |             await birthdayInput.click();
  304 |             await page.keyboard.press('Meta+a');
  305 |             await page.keyboard.type(oldBirthday);
  306 |             await page.keyboard.press('Enter');
  307 |             await dialog.getByText('Chỉnh sửa hồ sơ').click();
  308 |             await page.waitForTimeout(300);
  309 |             await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  310 |             await page.waitForTimeout(1000);
  311 |         }
  312 |     });
  313 | 
  314 |     test('UPDATE_PROFILE_14: Should show error when gender is not selected', async ({
  315 |         homePage,
  316 |         dashboardPage,
  317 |         page,
  318 |     }) => {
  319 |         // BUG: Không hiển thị lỗi khi không chọn giới tính
  320 |         test.fail();
  321 | 
  322 |         await dashboardPage.loginAndGotoDashboard(homePage);
  323 |         await dashboardPage.openProfileDialog();
  324 | 
  325 |         const dialog = page.getByRole('dialog');
  326 |         // Thử clear gender nếu có thể
  327 |         const genderSelect = dialog.locator('.ant-select-clear');
  328 |         if (await genderSelect.isVisible()) {
  329 |             await genderSelect.click();
  330 |         }
  331 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  332 | 
  333 |         await expect(dialog.getByText('Vui lòng chọn giới tính')).toBeVisible();
  334 |     });
  335 | 
  336 |     test('UPDATE_PROFILE_15: Should update successfully with no data changed', async ({
  337 |         homePage,
  338 |         dashboardPage,
  339 |         page,
  340 |     }) => {
  341 |         await dashboardPage.loginAndGotoDashboard(homePage);
  342 |         await dashboardPage.openProfileDialog();
  343 | 
  344 |         const dialog = page.getByRole('dialog');
  345 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  346 | 
  347 |         await expect(page.getByText('Cập nhật thông tin thành công')).toBeVisible({
  348 |             timeout: 5000,
  349 |         });
  350 |     });
  351 | 
  352 |     test('UPDATE_PROFILE_16: Should handle multiple consecutive update clicks', async ({
  353 |         homePage,
  354 |         dashboardPage,
  355 |         page,
  356 |     }) => {
  357 |         await dashboardPage.loginAndGotoDashboard(homePage);
  358 |         await dashboardPage.openProfileDialog();
  359 | 
  360 |         const dialog = page.getByRole('dialog');
  361 |         const updateBtn = dialog.getByRole('button', { name: 'Cập nhật' });
  362 | 
  363 |         await Promise.all([updateBtn.click(), updateBtn.click({ delay: 50 })]);
  364 | 
  365 |         await expect(page.getByText('Cập nhật thông tin thành công')).toBeVisible({
  366 |             timeout: 5000,
  367 |         });
  368 |     });
  369 | 
  370 |     test('UPDATE_PROFILE_17: Should persist data after page refresh', async ({
  371 |         homePage,
  372 |         dashboardPage,
  373 |         page,
  374 |     }) => {
  375 |         await dashboardPage.loginAndGotoDashboard(homePage);
  376 |         await dashboardPage.openProfileDialog();
  377 | 
  378 |         const dialog = page.getByRole('dialog');
  379 |         const oldName = await dialog.locator('#name').inputValue();
  380 |         const tempName = 'Tên Kiểm Tra Refresh';
  381 | 
  382 |         await dialog.locator('#name').clear();
  383 |         await dialog.locator('#name').fill(tempName);
  384 | 
  385 |         const [updateRes] = await Promise.all([
  386 |             page.waitForResponse(
  387 |                 (res) => res.url().includes('/api/users/') && res.request().method() === 'PUT'
  388 |             ),
  389 |             dialog.getByRole('button', { name: 'Cập nhật' }).click(),
  390 |         ]);
  391 |         expect(updateRes.status()).toBe(200);
  392 | 
  393 |         await expect(dialog).toBeHidden({ timeout: 5000 });
  394 | 
  395 |         // Refresh page
  396 |         await page.reload();
  397 |         await page.waitForLoadState('domcontentloaded');
  398 | 
  399 |         await dashboardPage.openProfileDialog();
```