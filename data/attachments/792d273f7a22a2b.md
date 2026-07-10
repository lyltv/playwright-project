# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/booked.spec.ts >> Dashboard - Booked Rooms >> BOOKED_01: Should display list of rented rooms
- Location: tests/dashboard/booked.spec.ts:4:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - link "Cyber Logo CyberSoft" [ref=e5] [cursor=pointer]:
        - /url: /
        - img "Cyber Logo" [ref=e6]
        - generic [ref=e7]: CyberSoft
      - button "Open user menu Ly Le Thi Van" [ref=e9] [cursor=pointer]:
        - generic [ref=e10]: Open user menu
        - img [ref=e11]
        - generic [ref=e12]: Ly Le Thi Van
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: /
        - listitem [ref=e17]:
          - link "About" [ref=e18] [cursor=pointer]:
            - /url: /info-user
        - listitem [ref=e19]:
          - link "Services" [ref=e20] [cursor=pointer]:
            - /url: /info-user
        - listitem [ref=e21]:
          - link "Pricing" [ref=e22] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e23]:
          - link "Contact" [ref=e24] [cursor=pointer]:
            - /url: "#"
  - paragraph [ref=e29]: Thông tin người dùng Ly Le Thi Van
  - generic [ref=e30]:
    - generic [ref=e32]:
      - button "Cập nhật ảnh" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - paragraph [ref=e38]: Xác minh danh tính
        - paragraph [ref=e39]: Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
        - button "Nhận huy hiệu" [ref=e40] [cursor=pointer]:
          - generic [ref=e41]: Nhận huy hiệu
        - paragraph [ref=e43]: Ly Le Thi Van đã xác nhận
        - paragraph [ref=e44]:
          - img [ref=e46]
          - text: Địa chỉ email
    - generic [ref=e48]:
      - paragraph [ref=e49]: Xin chào, tôi là Ly Le Thi Van
      - paragraph [ref=e50]: Bắt đầu tham gia vào 2023
      - button "Chỉnh sửa hồ sơ" [ref=e51] [cursor=pointer]
      - heading "Phòng đã thuê" [level=1] [ref=e52]
      - generic [ref=e53]:
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e56] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e59]:
            - generic [ref=e61]:
              - generic: prev
              - generic [ref=e68]: next
              - button "Guest favorite" [ref=e75]:
                - generic [ref=e76]: Guest favorite
              - button [ref=e77]:
                - img [ref=e78]
            - generic [ref=e80]:
              - generic [ref=e81]:
                - generic [ref=e82]:
                  - paragraph [ref=e83]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e84]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e86]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e87]:
                  - generic [ref=e88]: Wifi •
                  - generic [ref=e89]: Máy giặt •
                  - generic [ref=e90]: Tivi •
                  - generic [ref=e91]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e92]:
                - generic [ref=e93]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e96] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e99]:
            - generic [ref=e101]:
              - generic: prev
              - generic [ref=e108]: next
              - button "Guest favorite" [ref=e115]:
                - generic [ref=e116]: Guest favorite
              - button [ref=e117]:
                - img [ref=e118]
            - generic [ref=e120]:
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - paragraph [ref=e123]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e124]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e126]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e127]:
                  - generic [ref=e128]: Wifi •
                  - generic [ref=e129]: Máy giặt •
                  - generic [ref=e130]: Tivi •
                  - generic [ref=e131]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e132]:
                - generic [ref=e133]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e136] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e139]:
            - generic [ref=e141]:
              - generic: prev
              - generic [ref=e148]: next
              - button "Guest favorite" [ref=e155]:
                - generic [ref=e156]: Guest favorite
              - button [ref=e157]:
                - img [ref=e158]
            - generic [ref=e160]:
              - generic [ref=e161]:
                - generic [ref=e162]:
                  - paragraph [ref=e163]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e164]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e166]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e167]:
                  - generic [ref=e168]: Wifi •
                  - generic [ref=e169]: Máy giặt •
                  - generic [ref=e170]: Tivi •
                  - generic [ref=e171]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e172]:
                - generic [ref=e173]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e176] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e179]:
            - generic [ref=e181]:
              - generic: prev
              - generic [ref=e188]: next
              - button "Guest favorite" [ref=e195]:
                - generic [ref=e196]: Guest favorite
              - button [ref=e197]:
                - img [ref=e198]
            - generic [ref=e200]:
              - generic [ref=e201]:
                - generic [ref=e202]:
                  - paragraph [ref=e203]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e204]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e206]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e207]:
                  - generic [ref=e208]: Wifi •
                  - generic [ref=e209]: Máy giặt •
                  - generic [ref=e210]: Tivi •
                  - generic [ref=e211]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e212]:
                - generic [ref=e213]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e216] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e219]:
            - generic [ref=e221]:
              - generic: prev
              - generic [ref=e228]: next
              - button "Guest favorite" [ref=e235]:
                - generic [ref=e236]: Guest favorite
              - button [ref=e237]:
                - img [ref=e238]
            - generic [ref=e240]:
              - generic [ref=e241]:
                - generic [ref=e242]:
                  - paragraph [ref=e243]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e244]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e246]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e247]:
                  - generic [ref=e248]: Wifi •
                  - generic [ref=e249]: Máy giặt •
                  - generic [ref=e250]: Tivi •
                  - generic [ref=e251]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e252]:
                - generic [ref=e253]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e256] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e259]:
            - generic [ref=e261]:
              - generic: prev
              - generic [ref=e268]: next
              - button "Guest favorite" [ref=e275]:
                - generic [ref=e276]: Guest favorite
              - button [ref=e277]:
                - img [ref=e278]
            - generic [ref=e280]:
              - generic [ref=e281]:
                - generic [ref=e282]:
                  - paragraph [ref=e283]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e284]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e286]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e287]:
                  - generic [ref=e288]: Wifi •
                  - generic [ref=e289]: Máy giặt •
                  - generic [ref=e290]: Tivi •
                  - generic [ref=e291]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e292]:
                - generic [ref=e293]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e296] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e299]:
            - generic [ref=e301]:
              - generic: prev
              - generic [ref=e308]: next
              - button "Guest favorite" [ref=e315]:
                - generic [ref=e316]: Guest favorite
              - button [ref=e317]:
                - img [ref=e318]
            - generic [ref=e320]:
              - generic [ref=e321]:
                - generic [ref=e322]:
                  - paragraph [ref=e323]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e324]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e326]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e327]:
                  - generic [ref=e328]: Wifi •
                  - generic [ref=e329]: Máy giặt •
                  - generic [ref=e330]: Tivi •
                  - generic [ref=e331]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e332]:
                - generic [ref=e333]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e336] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e339]:
            - generic [ref=e341]:
              - generic: prev
              - generic [ref=e348]: next
              - button "Guest favorite" [ref=e355]:
                - generic [ref=e356]: Guest favorite
              - button [ref=e357]:
                - img [ref=e358]
            - generic [ref=e360]:
              - generic [ref=e361]:
                - generic [ref=e362]:
                  - paragraph [ref=e363]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e364]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e366]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e367]:
                  - generic [ref=e368]: Wifi •
                  - generic [ref=e369]: Máy giặt •
                  - generic [ref=e370]: Tivi •
                  - generic [ref=e371]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e372]:
                - generic [ref=e373]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e376] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e379]:
            - generic [ref=e381]:
              - generic: prev
              - generic [ref=e388]: next
              - button "Guest favorite" [ref=e395]:
                - generic [ref=e396]: Guest favorite
              - button [ref=e397]:
                - img [ref=e398]
            - generic [ref=e400]:
              - generic [ref=e401]:
                - generic [ref=e402]:
                  - paragraph [ref=e403]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e404]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e406]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e407]:
                  - generic [ref=e408]: Wifi •
                  - generic [ref=e409]: Máy giặt •
                  - generic [ref=e410]: Tivi •
                  - generic [ref=e411]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e412]:
                - generic [ref=e413]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e416] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e419]:
            - generic [ref=e421]:
              - generic: prev
              - generic [ref=e428]: next
              - button "Guest favorite" [ref=e435]:
                - generic [ref=e436]: Guest favorite
              - button [ref=e437]:
                - img [ref=e438]
            - generic [ref=e440]:
              - generic [ref=e441]:
                - generic [ref=e442]:
                  - paragraph [ref=e443]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e444]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e446]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e447]:
                  - generic [ref=e448]: Wifi •
                  - generic [ref=e449]: Máy giặt •
                  - generic [ref=e450]: Tivi •
                  - generic [ref=e451]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e452]:
                - generic [ref=e453]: $ 28
                - text: / đêm
  - generic [ref=e454]:
    - generic [ref=e455]:
      - generic [ref=e456]:
        - heading "Giới thiệu" [level=2] [ref=e457]
        - list [ref=e458]:
          - listitem [ref=e459]:
            - link "Phương thức hoạt động của Cyber" [ref=e460] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e461]:
            - link "Trang tin tức" [ref=e462] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e463]:
            - link "Nhà đầu tư" [ref=e464] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e465]:
            - link "Cyber Plus" [ref=e466] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e467]:
            - link "Cyber Luxe" [ref=e468] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e469]:
            - link "HotelTonight" [ref=e470] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e471]:
            - link "Cyber for Work" [ref=e472] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e473]:
            - link "Nhờ có Host, mọi điều đều có thể" [ref=e474] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e475]:
            - link "Cơ hội nghề nghiệp" [ref=e476] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e477]:
            - link "Thư của nhà sáng lập" [ref=e478] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e479]:
        - heading "Cộng đồng" [level=2] [ref=e480]
        - list [ref=e481]:
          - listitem [ref=e482]:
            - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e483] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e484]:
            - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e485] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e486]:
            - link "Đối tác liên kết Cyber" [ref=e487] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e488]:
            - link "Chỗ ở cho tuyến đầu" [ref=e489] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e490]:
            - link "Lượt giới thiệu của khách" [ref=e491] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e492]:
            - link "CyberSoft.edu.vn" [ref=e493] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e494]:
        - heading "Đón tiếp khách" [level=2] [ref=e495]
        - list [ref=e496]:
          - listitem [ref=e497]:
            - link "Cho thuê nhà" [ref=e498] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e499]:
            - link "Tổ chức Trải nghiệm trực tuyến" [ref=e500] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e501]:
            - link "Tổ chức Trải nghiệm" [ref=e502] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e503]:
            - link "Đón tiếp khách có trách nhiệm" [ref=e504] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e505]:
            - link "Trung tâm tài nguyên" [ref=e506] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e507]:
            - link "Trung tâm cộng đồng" [ref=e508] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e509]:
        - heading "Hỗ trợ" [level=2] [ref=e510]
        - list [ref=e511]:
          - listitem [ref=e512]:
            - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e513] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e514]:
            - link "Trung tâm trợ giúp" [ref=e515] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e516]:
            - link "Các tùy chọn hủy" [ref=e517] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e518]:
            - link "Hỗ trợ khu dân cư" [ref=e519] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e520]:
            - link "Tin cây và an toàn" [ref=e521] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
    - generic [ref=e523]:
      - generic [ref=e524]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
      - generic [ref=e525]:
        - img [ref=e527]
        - text: Tiếng Việt (VN)
        - text: USD
        - generic [ref=e529]: Hỗ trợ tài nguyên
```

# Test source

```ts
  1  | import { test, expect } from '@fixtures/test_hook';
  2  | 
  3  | test.describe('Dashboard - Booked Rooms', () => {
  4  |     test('BOOKED_01: Should display list of rented rooms', async ({ homePage, dashboardPage, page }) => {
  5  |         await dashboardPage.loginAndGotoDashboard(homePage);
  6  | 
> 7  |         await page.waitForLoadState('networkidle');
     |                    ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  8  | 
  9  |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  10 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  11 | 
  12 |         const hasCards = await roomCards.first().isVisible({ timeout: 5000 }).catch(() => false);
  13 |         const hasEmpty = await emptyMessage.isVisible({ timeout: 3000 }).catch(() => false);
  14 | 
  15 |         expect(hasCards || hasEmpty, 'Dashboard phải hiển thị danh sách phòng hoặc thông báo trống').toBeTruthy();
  16 | 
  17 |         if (hasCards) {
  18 |             const cardCount = await roomCards.count();
  19 |             expect(cardCount).toBeGreaterThan(0);
  20 |             const firstCardText = await roomCards.first().textContent();
  21 |             expect(firstCardText!.trim().length).toBeGreaterThan(0);
  22 |         }
  23 |     });
  24 | 
  25 |     test('BOOKED_02: Should show message when no rooms rented', async ({ page, homePage, dashboardPage }) => {
  26 |         // Test với tài khoản mới đăng ký (không có phòng đã thuê)
  27 |         // Dùng tài khoản hiện tại nếu chưa có booking
  28 |         await dashboardPage.loginAndGotoDashboard(homePage);
  29 | 
  30 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  31 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  32 | 
  33 |         const cardCount = await roomCards.count();
  34 |         if (cardCount === 0) {
  35 |             await expect(emptyMessage).toBeVisible();
  36 |         } else {
  37 |             // Tài khoản đã có phòng → skip test này
  38 |             test.skip();
  39 |         }
  40 |     });
  41 | 
  42 |     test('BOOKED_03: Should load multiple rooms with pagination', async ({ homePage, dashboardPage, page }) => {
  43 |         // BUG: Phân trang không hoạt động khi có nhiều phòng
  44 |         test.fail();
  45 | 
  46 |         await dashboardPage.loginAndGotoDashboard(homePage);
  47 | 
  48 |         await page.waitForLoadState('networkidle');
  49 | 
  50 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  51 |         await expect(roomCards.first()).toBeVisible({ timeout: 10000 });
  52 | 
  53 |         const pagination = page.locator('.ant-pagination');
  54 |         const loadMore = page.getByRole('button', { name: /xem thêm|load more/i });
  55 | 
  56 |         const hasPagination = await pagination.isVisible().catch(() => false);
  57 |         const hasLoadMore = await loadMore.isVisible().catch(() => false);
  58 | 
  59 |         expect(hasPagination || hasLoadMore, 'Phải có phân trang hoặc nút xem thêm').toBeTruthy();
  60 |     });
  61 | });
  62 | 
```