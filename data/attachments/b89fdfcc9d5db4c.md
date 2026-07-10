# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/booked.spec.ts >> Dashboard - Booked Rooms >> BOOKED_03: Should load multiple rooms with pagination
- Location: tests/dashboard/booked.spec.ts:63:9

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
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e456] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e459]:
            - generic [ref=e461]:
              - generic: prev
              - generic [ref=e468]: next
              - button "Guest favorite" [ref=e475]:
                - generic [ref=e476]: Guest favorite
              - button [ref=e477]:
                - img [ref=e478]
            - generic [ref=e480]:
              - generic [ref=e481]:
                - generic [ref=e482]:
                  - paragraph [ref=e483]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e484]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e486]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e487]:
                  - generic [ref=e488]: Wifi •
                  - generic [ref=e489]: Máy giặt •
                  - generic [ref=e490]: Tivi •
                  - generic [ref=e491]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e492]:
                - generic [ref=e493]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e496] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e499]:
            - generic [ref=e501]:
              - generic: prev
              - generic [ref=e508]: next
              - button "Guest favorite" [ref=e515]:
                - generic [ref=e516]: Guest favorite
              - button [ref=e517]:
                - img [ref=e518]
            - generic [ref=e520]:
              - generic [ref=e521]:
                - generic [ref=e522]:
                  - paragraph [ref=e523]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e524]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e526]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e527]:
                  - generic [ref=e528]: Wifi •
                  - generic [ref=e529]: Máy giặt •
                  - generic [ref=e530]: Tivi •
                  - generic [ref=e531]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e532]:
                - generic [ref=e533]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e536] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e539]:
            - generic [ref=e541]:
              - generic: prev
              - generic [ref=e548]: next
              - button "Guest favorite" [ref=e555]:
                - generic [ref=e556]: Guest favorite
              - button [ref=e557]:
                - img [ref=e558]
            - generic [ref=e560]:
              - generic [ref=e561]:
                - generic [ref=e562]:
                  - paragraph [ref=e563]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e564]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e566]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e567]:
                  - generic [ref=e568]: Wifi •
                  - generic [ref=e569]: Máy giặt •
                  - generic [ref=e570]: Tivi •
                  - generic [ref=e571]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e572]:
                - generic [ref=e573]: $ 28
                - text: / đêm
        - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e576] [cursor=pointer]:
          - /url: /room-detail/1
          - generic [ref=e579]:
            - generic [ref=e581]:
              - generic: prev
              - generic [ref=e588]: next
              - button "Guest favorite" [ref=e595]:
                - generic [ref=e596]: Guest favorite
              - button [ref=e597]:
                - img [ref=e598]
            - generic [ref=e600]:
              - generic [ref=e601]:
                - generic [ref=e602]:
                  - paragraph [ref=e603]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                  - paragraph [ref=e604]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                - paragraph [ref=e606]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                - paragraph [ref=e607]:
                  - generic [ref=e608]: Wifi •
                  - generic [ref=e609]: Máy giặt •
                  - generic [ref=e610]: Tivi •
                  - generic [ref=e611]: Đỗ xe •
                  - text: Hồ bơi
              - generic [ref=e612]:
                - generic [ref=e613]: $ 28
                - text: / đêm
  - generic [ref=e614]:
    - generic [ref=e615]:
      - generic [ref=e616]:
        - heading "Giới thiệu" [level=2] [ref=e617]
        - list [ref=e618]:
          - listitem [ref=e619]:
            - link "Phương thức hoạt động của Cyber" [ref=e620] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e621]:
            - link "Trang tin tức" [ref=e622] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e623]:
            - link "Nhà đầu tư" [ref=e624] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e625]:
            - link "Cyber Plus" [ref=e626] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e627]:
            - link "Cyber Luxe" [ref=e628] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e629]:
            - link "HotelTonight" [ref=e630] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e631]:
            - link "Cyber for Work" [ref=e632] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e633]:
            - link "Nhờ có Host, mọi điều đều có thể" [ref=e634] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e635]:
            - link "Cơ hội nghề nghiệp" [ref=e636] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e637]:
            - link "Thư của nhà sáng lập" [ref=e638] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e639]:
        - heading "Cộng đồng" [level=2] [ref=e640]
        - list [ref=e641]:
          - listitem [ref=e642]:
            - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e643] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e644]:
            - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e645] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e646]:
            - link "Đối tác liên kết Cyber" [ref=e647] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e648]:
            - link "Chỗ ở cho tuyến đầu" [ref=e649] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e650]:
            - link "Lượt giới thiệu của khách" [ref=e651] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e652]:
            - link "CyberSoft.edu.vn" [ref=e653] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e654]:
        - heading "Đón tiếp khách" [level=2] [ref=e655]
        - list [ref=e656]:
          - listitem [ref=e657]:
            - link "Cho thuê nhà" [ref=e658] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e659]:
            - link "Tổ chức Trải nghiệm trực tuyến" [ref=e660] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e661]:
            - link "Tổ chức Trải nghiệm" [ref=e662] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e663]:
            - link "Đón tiếp khách có trách nhiệm" [ref=e664] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e665]:
            - link "Trung tâm tài nguyên" [ref=e666] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e667]:
            - link "Trung tâm cộng đồng" [ref=e668] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
      - generic [ref=e669]:
        - heading "Hỗ trợ" [level=2] [ref=e670]
        - list [ref=e671]:
          - listitem [ref=e672]:
            - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e673] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e674]:
            - link "Trung tâm trợ giúp" [ref=e675] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e676]:
            - link "Các tùy chọn hủy" [ref=e677] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e678]:
            - link "Hỗ trợ khu dân cư" [ref=e679] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
          - listitem [ref=e680]:
            - link "Tin cây và an toàn" [ref=e681] [cursor=pointer]:
              - /url: https://cybersoft.edu.vn
    - generic [ref=e683]:
      - generic [ref=e684]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
      - generic [ref=e685]:
        - img [ref=e687]
        - text: Tiếng Việt (VN)
        - text: USD
        - generic [ref=e689]: Hỗ trợ tài nguyên
```

# Test source

```ts
  1  | import { test, expect } from '@fixtures/test_hook';
  2  | 
  3  | test.describe('Dashboard - Booked Rooms', () => {
  4  |     test('BOOKED_01: Should display list of rented rooms', async ({
  5  |         homePage,
  6  |         dashboardPage,
  7  |         page,
  8  |     }) => {
  9  |         await dashboardPage.loginAndGotoDashboard(homePage);
  10 | 
  11 |         // await page.waitForLoadState('networkidle');
  12 | 
  13 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  14 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  15 |         await Promise.race([
  16 |             roomCards.first().waitFor({ state: 'visible', timeout: 15000 }),
  17 |             emptyMessage.first().waitFor({ state: 'visible', timeout: 15000 }),
  18 |         ]).catch(() => {
  19 |             console.log(
  20 |                 '⚠️ Cảnh báo: Chờ UI Dashboard hiển thị bị quá hạn nhưng vẫn tiếp tục kiểm tra assertion.'
  21 |             );
  22 |         });
  23 |         const hasCards = await roomCards
  24 |             .first()
  25 |             .isVisible({ timeout: 5000 })
  26 |             .catch(() => false);
  27 |         const hasEmpty = await emptyMessage.isVisible({ timeout: 3000 }).catch(() => false);
  28 | 
  29 |         expect(
  30 |             hasCards || hasEmpty,
  31 |             'Dashboard phải hiển thị danh sách phòng hoặc thông báo trống'
  32 |         ).toBeTruthy();
  33 | 
  34 |         if (hasCards) {
  35 |             const cardCount = await roomCards.count();
  36 |             expect(cardCount).toBeGreaterThan(0);
  37 |             const firstCardText = await roomCards.first().textContent();
  38 |             expect(firstCardText!.trim().length).toBeGreaterThan(0);
  39 |         }
  40 |     });
  41 | 
  42 |     test('BOOKED_02: Should show message when no rooms rented', async ({
  43 |         page,
  44 |         homePage,
  45 |         dashboardPage,
  46 |     }) => {
  47 |         // Test với tài khoản mới đăng ký (không có phòng đã thuê)
  48 |         // Dùng tài khoản hiện tại nếu chưa có booking
  49 |         await dashboardPage.loginAndGotoDashboard(homePage);
  50 | 
  51 |         const emptyMessage = page.getByText(/chưa thuê|haven.*booked|no.*room/i);
  52 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  53 | 
  54 |         const cardCount = await roomCards.count();
  55 |         if (cardCount === 0) {
  56 |             await expect(emptyMessage).toBeVisible();
  57 |         } else {
  58 |             // Tài khoản đã có phòng → skip test này
  59 |             test.skip();
  60 |         }
  61 |     });
  62 | 
  63 |     test('BOOKED_03: Should load multiple rooms with pagination', async ({
  64 |         homePage,
  65 |         dashboardPage,
  66 |         page,
  67 |     }) => {
  68 |         // BUG: Phân trang không hoạt động khi có nhiều phòng
  69 |         test.fail();
  70 | 
  71 |         await dashboardPage.loginAndGotoDashboard(homePage);
  72 | 
> 73 |         await page.waitForLoadState('networkidle');
     |                    ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  74 | 
  75 |         const roomCards = page.locator('.ant-card, [class*="room-card"], [class*="booking"]');
  76 |         await expect(roomCards.first()).toBeVisible({ timeout: 10000 });
  77 | 
  78 |         const pagination = page.locator('.ant-pagination');
  79 |         const loadMore = page.getByRole('button', { name: /xem thêm|load more/i });
  80 | 
  81 |         const hasPagination = await pagination.isVisible().catch(() => false);
  82 |         const hasLoadMore = await loadMore.isVisible().catch(() => false);
  83 | 
  84 |         expect(hasPagination || hasLoadMore, 'Phải có phân trang hoặc nút xem thêm').toBeTruthy();
  85 |     });
  86 | });
  87 | 
```