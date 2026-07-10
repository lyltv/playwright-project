# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/profile.spec.ts >> Dashboard - Update Profile >> UPDATE_PROFILE_13: Should show error for future date of birth
- Location: tests/dashboard/profile.spec.ts:267:9

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
  201 |         await dashboardPage.openProfileDialog();
  202 | 
  203 |         const dialog = page.getByRole('dialog');
  204 |         await dialog.locator('#phone').clear();
  205 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  206 | 
  207 |         await expect(dialog.getByText('Vui lòng nhập số điện thoại!')).toBeVisible();
  208 |     });
  209 | 
  210 |     test('UPDATE_PROFILE_10: Should show error for incorrect phone format', async ({
  211 |         homePage,
  212 |         dashboardPage,
  213 |         page,
  214 |     }) => {
  215 |         await dashboardPage.loginAndGotoDashboard(homePage);
  216 |         await dashboardPage.openProfileDialog();
  217 | 
  218 |         const dialog = page.getByRole('dialog');
  219 |         await dialog.locator('#phone').clear();
  220 |         await dialog.locator('#phone').fill('abc1234567');
  221 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  222 | 
  223 |         await expect(dialog.getByText('Sai định dạng số điện thoại!')).toBeVisible();
  224 |     });
  225 | 
  226 |     test('UPDATE_PROFILE_11: Should show error for incorrect phone length', async ({
  227 |         homePage,
  228 |         dashboardPage,
  229 |         page,
  230 |     }) => {
  231 |         // BUG: Cho phép cập nhật số điện thoại sai độ dài
  232 |         test.fail();
  233 | 
  234 |         await dashboardPage.loginAndGotoDashboard(homePage);
  235 |         await dashboardPage.openProfileDialog();
  236 | 
  237 |         const dialog = page.getByRole('dialog');
  238 |         await dialog.locator('#phone').clear();
  239 |         await dialog.locator('#phone').fill('0123');
  240 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  241 | 
  242 |         await expect(dialog.getByText('Sai định dạng số điện thoại!')).toBeVisible();
  243 |     });
  244 | 
  245 |     test('UPDATE_PROFILE_12: Should show error when birthday is blank', async ({
  246 |         homePage,
  247 |         dashboardPage,
  248 |         page,
  249 |     }) => {
  250 |         await dashboardPage.loginAndGotoDashboard(homePage);
  251 |         await dashboardPage.openProfileDialog();
  252 | 
  253 |         const dialog = page.getByRole('dialog');
  254 |         const birthdayInput = dialog.locator('#birthday');
  255 |         // Focus → select all → delete → close picker
  256 |         await birthdayInput.click();
  257 |         await page.keyboard.press('Meta+a');
  258 |         await page.keyboard.press('Backspace');
  259 |         // Đóng picker bằng click vào tiêu đề dialog
  260 |         await dialog.getByText('Chỉnh sửa hồ sơ').click();
  261 |         await page.waitForTimeout(300);
  262 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  263 | 
  264 |         await expect(dialog.getByText(/ngày sinh/i).last()).toBeVisible();
  265 |     });
  266 | 
  267 |     test('UPDATE_PROFILE_13: Should show error for future date of birth', async ({
  268 |         homePage,
  269 |         dashboardPage,
  270 |         page,
  271 |     }) => {
  272 |         // BUG: Web cho phép cập nhật ngày sinh tương lai (server trả 200)
  273 |         test.fail();
  274 | 
  275 |         await dashboardPage.loginAndGotoDashboard(homePage);
  276 |         await dashboardPage.openProfileDialog();
  277 | 
  278 |         const dialog = page.getByRole('dialog');
  279 | 
  280 |         // Lưu ngày sinh cũ để restore
  281 |         const birthdayInput = dialog.locator('#birthday');
  282 |         const oldBirthday = await birthdayInput.inputValue();
  283 | 
  284 |         // Nhập ngày sinh tương lai
  285 |         await birthdayInput.click();
  286 |         await page.keyboard.press('Meta+a');
  287 |         await page.keyboard.type('15/06/2030');
  288 |         await page.keyboard.press('Enter');
  289 |         await dialog.getByText('Chỉnh sửa hồ sơ').click();
  290 |         await page.waitForTimeout(300);
  291 | 
  292 |         // Bắt API response
  293 |         const [response] = await Promise.all([
  294 |             page.waitForResponse(
  295 |                 (res) => res.url().includes('/api/users/') && res.request().method() === 'PUT'
  296 |             ),
  297 |             dialog.getByRole('button', { name: 'Cập nhật' }).click(),
  298 |         ]);
  299 | 
  300 |         // Server phải từ chối ngày sinh tương lai (status !== 200)
> 301 |         expect(response.status()).not.toBe(200);
      |                                       ^ Error: expect(received).not.toBe(expected) // Object.is equality
  302 | 
  303 |         // Restore ngày sinh cũ nếu server chấp nhận (bug case)
  304 |         if (response.status() === 200 && oldBirthday) {
  305 |             await birthdayInput.click();
  306 |             await page.keyboard.press('Meta+a');
  307 |             await page.keyboard.type(oldBirthday);
  308 |             await page.keyboard.press('Enter');
  309 |             await dialog.getByText('Chỉnh sửa hồ sơ').click();
  310 |             await page.waitForTimeout(300);
  311 |             await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  312 |             await page.waitForTimeout(1000);
  313 |         }
  314 |     });
  315 | 
  316 |     test('UPDATE_PROFILE_14: Should show error when gender is not selected', async ({
  317 |         homePage,
  318 |         dashboardPage,
  319 |         page,
  320 |     }) => {
  321 |         // BUG: Không hiển thị lỗi khi không chọn giới tính
  322 |         test.fail();
  323 | 
  324 |         await dashboardPage.loginAndGotoDashboard(homePage);
  325 |         await dashboardPage.openProfileDialog();
  326 | 
  327 |         const dialog = page.getByRole('dialog');
  328 |         // Thử clear gender nếu có thể
  329 |         const genderSelect = dialog.locator('.ant-select-clear');
  330 |         if (await genderSelect.isVisible()) {
  331 |             await genderSelect.click();
  332 |         }
  333 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  334 |         await expect(dialog.getByText('Vui lòng chọn giới tính')).toBeVisible();
  335 |     });
  336 | 
  337 |     test('UPDATE_PROFILE_15: Should update successfully with no data changed', async ({
  338 |         homePage,
  339 |         dashboardPage,
  340 |         page,
  341 |     }) => {
  342 |         await dashboardPage.loginAndGotoDashboard(homePage);
  343 |         await dashboardPage.openProfileDialog();
  344 | 
  345 |         const dialog = page.getByRole('dialog');
  346 |         await dialog.getByRole('button', { name: 'Cập nhật' }).click();
  347 | 
  348 |         await expect(page.getByText('Cập nhật thông tin thành công')).toBeVisible({
  349 |             timeout: 5000,
  350 |         });
  351 |     });
  352 | 
  353 |     test('UPDATE_PROFILE_16: Should handle multiple consecutive update clicks', async ({
  354 |         homePage,
  355 |         dashboardPage,
  356 |         page,
  357 |     }) => {
  358 |         await dashboardPage.loginAndGotoDashboard(homePage);
  359 |         await dashboardPage.openProfileDialog();
  360 | 
  361 |         const dialog = page.getByRole('dialog');
  362 |         const updateBtn = dialog.getByRole('button', { name: 'Cập nhật' });
  363 | 
  364 |         await Promise.all([updateBtn.click(), updateBtn.click({ delay: 50 })]);
  365 | 
  366 |         await expect(page.getByText('Cập nhật thông tin thành công')).toBeVisible({
  367 |             timeout: 5000,
  368 |         });
  369 |     });
  370 | 
  371 |     test('UPDATE_PROFILE_17: Should persist data after page refresh', async ({
  372 |         homePage,
  373 |         dashboardPage,
  374 |         page,
  375 |     }) => {
  376 |         await dashboardPage.loginAndGotoDashboard(homePage);
  377 |         await dashboardPage.openProfileDialog();
  378 | 
  379 |         const dialog = page.getByRole('dialog');
  380 |         const oldName = await dialog.locator('#name').inputValue();
  381 |         const tempName = 'Tên Kiểm Tra Refresh';
  382 | 
  383 |         await dialog.locator('#name').clear();
  384 |         await dialog.locator('#name').fill(tempName);
  385 | 
  386 |         const [updateRes] = await Promise.all([
  387 |             page.waitForResponse(
  388 |                 (res) => res.url().includes('/api/users/') && res.request().method() === 'PUT'
  389 |             ),
  390 |             dialog.getByRole('button', { name: 'Cập nhật' }).click(),
  391 |         ]);
  392 |         expect(updateRes.status()).toBe(200);
  393 | 
  394 |         await expect(dialog).toBeHidden({ timeout: 5000 });
  395 | 
  396 |         // Refresh page
  397 |         await page.reload();
  398 |         await page.waitForLoadState('domcontentloaded');
  399 | 
  400 |         await dashboardPage.openProfileDialog();
  401 |         const dialog2 = page.getByRole('dialog');
```