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
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh Phòng sang trọng với ban công tại D.1 - 200m đến Bitexco 2 khách • 1 phòng ngủ • 1 giường • 1 phòng tắm Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 17 / đêm" [ref=e63] [cursor=pointer]:
            - /url: /room-detail/3
            - generic [ref=e66]:
              - generic [ref=e68]:
                - generic: prev
                - generic [ref=e75]: next
                - button "Guest favorite" [ref=e82]:
                  - generic [ref=e83]: Guest favorite
                - button [ref=e84]:
                  - img [ref=e85]
              - generic [ref=e87]:
                - generic [ref=e88]:
                  - generic [ref=e89]:
                    - paragraph [ref=e90]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e91]: Phòng sang trọng với ban công tại D.1 - 200m đến Bitexco
                  - paragraph [ref=e93]: 2 khách • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e94]:
                    - generic [ref=e95]: Máy giặt •
                    - generic [ref=e96]: Tivi •
                    - generic [ref=e97]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e98]:
                  - generic [ref=e99]: $ 17
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e102] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e105]:
              - generic [ref=e107]:
                - generic: prev
                - generic [ref=e114]: next
                - button "Guest favorite" [ref=e121]:
                  - generic [ref=e122]: Guest favorite
                - button [ref=e123]:
                  - img [ref=e124]
              - generic [ref=e126]:
                - generic [ref=e127]:
                  - generic [ref=e128]:
                    - paragraph [ref=e129]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e130]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e132]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e133]:
                    - generic [ref=e134]: Wifi •
                    - generic [ref=e135]: Máy giặt •
                    - generic [ref=e136]: Tivi •
                    - generic [ref=e137]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e138]:
                  - generic [ref=e139]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e142] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e145]:
              - generic [ref=e147]:
                - generic: prev
                - generic [ref=e154]: next
                - button "Guest favorite" [ref=e161]:
                  - generic [ref=e162]: Guest favorite
                - button [ref=e163]:
                  - img [ref=e164]
              - generic [ref=e166]:
                - generic [ref=e167]:
                  - generic [ref=e168]:
                    - paragraph [ref=e169]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e170]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e172]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e173]:
                    - generic [ref=e174]: Wifi •
                    - generic [ref=e175]: Máy giặt •
                    - generic [ref=e176]: Tivi •
                    - generic [ref=e177]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e178]:
                  - generic [ref=e179]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e182] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e185]:
              - generic [ref=e187]:
                - generic: prev
                - generic [ref=e194]: next
                - button "Guest favorite" [ref=e201]:
                  - generic [ref=e202]: Guest favorite
                - button [ref=e203]:
                  - img [ref=e204]
              - generic [ref=e206]:
                - generic [ref=e207]:
                  - generic [ref=e208]:
                    - paragraph [ref=e209]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e210]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e212]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e213]:
                    - generic [ref=e214]: Wifi •
                    - generic [ref=e215]: Máy giặt •
                    - generic [ref=e216]: Tivi •
                    - generic [ref=e217]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e218]:
                  - generic [ref=e219]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e222] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e225]:
              - generic [ref=e227]:
                - generic: prev
                - generic [ref=e234]: next
                - button "Guest favorite" [ref=e241]:
                  - generic [ref=e242]: Guest favorite
                - button [ref=e243]:
                  - img [ref=e244]
              - generic [ref=e246]:
                - generic [ref=e247]:
                  - generic [ref=e248]:
                    - paragraph [ref=e249]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e250]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e252]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e253]:
                    - generic [ref=e254]: Wifi •
                    - generic [ref=e255]: Máy giặt •
                    - generic [ref=e256]: Tivi •
                    - generic [ref=e257]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e258]:
                  - generic [ref=e259]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e262] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e265]:
              - generic [ref=e267]:
                - generic: prev
                - generic [ref=e274]: next
                - button "Guest favorite" [ref=e281]:
                  - generic [ref=e282]: Guest favorite
                - button [ref=e283]:
                  - img [ref=e284]
              - generic [ref=e286]:
                - generic [ref=e287]:
                  - generic [ref=e288]:
                    - paragraph [ref=e289]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e290]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e292]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e293]:
                    - generic [ref=e294]: Wifi •
                    - generic [ref=e295]: Máy giặt •
                    - generic [ref=e296]: Tivi •
                    - generic [ref=e297]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e298]:
                  - generic [ref=e299]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e302] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e305]:
              - generic [ref=e307]:
                - generic: prev
                - generic [ref=e314]: next
                - button "Guest favorite" [ref=e321]:
                  - generic [ref=e322]: Guest favorite
                - button [ref=e323]:
                  - img [ref=e324]
              - generic [ref=e326]:
                - generic [ref=e327]:
                  - generic [ref=e328]:
                    - paragraph [ref=e329]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e330]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e332]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e333]:
                    - generic [ref=e334]: Wifi •
                    - generic [ref=e335]: Máy giặt •
                    - generic [ref=e336]: Tivi •
                    - generic [ref=e337]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e338]:
                  - generic [ref=e339]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e342] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e345]:
              - generic [ref=e347]:
                - generic: prev
                - generic [ref=e354]: next
                - button "Guest favorite" [ref=e361]:
                  - generic [ref=e362]: Guest favorite
                - button [ref=e363]:
                  - img [ref=e364]
              - generic [ref=e366]:
                - generic [ref=e367]:
                  - generic [ref=e368]:
                    - paragraph [ref=e369]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e370]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e372]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e373]:
                    - generic [ref=e374]: Wifi •
                    - generic [ref=e375]: Máy giặt •
                    - generic [ref=e376]: Tivi •
                    - generic [ref=e377]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e378]:
                  - generic [ref=e379]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e382] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e385]:
              - generic [ref=e387]:
                - generic: prev
                - generic [ref=e394]: next
                - button "Guest favorite" [ref=e401]:
                  - generic [ref=e402]: Guest favorite
                - button [ref=e403]:
                  - img [ref=e404]
              - generic [ref=e406]:
                - generic [ref=e407]:
                  - generic [ref=e408]:
                    - paragraph [ref=e409]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e410]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e412]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e413]:
                    - generic [ref=e414]: Wifi •
                    - generic [ref=e415]: Máy giặt •
                    - generic [ref=e416]: Tivi •
                    - generic [ref=e417]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e418]:
                  - generic [ref=e419]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e422] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e425]:
              - generic [ref=e427]:
                - generic: prev
                - generic [ref=e434]: next
                - button "Guest favorite" [ref=e441]:
                  - generic [ref=e442]: Guest favorite
                - button [ref=e443]:
                  - img [ref=e444]
              - generic [ref=e446]:
                - generic [ref=e447]:
                  - generic [ref=e448]:
                    - paragraph [ref=e449]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e450]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e452]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e453]:
                    - generic [ref=e454]: Wifi •
                    - generic [ref=e455]: Máy giặt •
                    - generic [ref=e456]: Tivi •
                    - generic [ref=e457]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e458]:
                  - generic [ref=e459]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e462] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e465]:
              - generic [ref=e467]:
                - generic: prev
                - generic [ref=e474]: next
                - button "Guest favorite" [ref=e481]:
                  - generic [ref=e482]: Guest favorite
                - button [ref=e483]:
                  - img [ref=e484]
              - generic [ref=e486]:
                - generic [ref=e487]:
                  - generic [ref=e488]:
                    - paragraph [ref=e489]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e490]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e492]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e493]:
                    - generic [ref=e494]: Wifi •
                    - generic [ref=e495]: Máy giặt •
                    - generic [ref=e496]: Tivi •
                    - generic [ref=e497]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e498]:
                  - generic [ref=e499]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e502] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e505]:
              - generic [ref=e507]:
                - generic: prev
                - generic [ref=e514]: next
                - button "Guest favorite" [ref=e521]:
                  - generic [ref=e522]: Guest favorite
                - button [ref=e523]:
                  - img [ref=e524]
              - generic [ref=e526]:
                - generic [ref=e527]:
                  - generic [ref=e528]:
                    - paragraph [ref=e529]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e530]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e532]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e533]:
                    - generic [ref=e534]: Wifi •
                    - generic [ref=e535]: Máy giặt •
                    - generic [ref=e536]: Tivi •
                    - generic [ref=e537]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e538]:
                  - generic [ref=e539]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e542] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e545]:
              - generic [ref=e547]:
                - generic: prev
                - generic [ref=e554]: next
                - button "Guest favorite" [ref=e561]:
                  - generic [ref=e562]: Guest favorite
                - button [ref=e563]:
                  - img [ref=e564]
              - generic [ref=e566]:
                - generic [ref=e567]:
                  - generic [ref=e568]:
                    - paragraph [ref=e569]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e570]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e572]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e573]:
                    - generic [ref=e574]: Wifi •
                    - generic [ref=e575]: Máy giặt •
                    - generic [ref=e576]: Tivi •
                    - generic [ref=e577]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e578]:
                  - generic [ref=e579]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e582] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e585]:
              - generic [ref=e587]:
                - generic: prev
                - generic [ref=e594]: next
                - button "Guest favorite" [ref=e601]:
                  - generic [ref=e602]: Guest favorite
                - button [ref=e603]:
                  - img [ref=e604]
              - generic [ref=e606]:
                - generic [ref=e607]:
                  - generic [ref=e608]:
                    - paragraph [ref=e609]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e610]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e612]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e613]:
                    - generic [ref=e614]: Wifi •
                    - generic [ref=e615]: Máy giặt •
                    - generic [ref=e616]: Tivi •
                    - generic [ref=e617]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e618]:
                  - generic [ref=e619]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e622] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e625]:
              - generic [ref=e627]:
                - generic: prev
                - generic [ref=e634]: next
                - button "Guest favorite" [ref=e641]:
                  - generic [ref=e642]: Guest favorite
                - button [ref=e643]:
                  - img [ref=e644]
              - generic [ref=e646]:
                - generic [ref=e647]:
                  - generic [ref=e648]:
                    - paragraph [ref=e649]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e650]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e652]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e653]:
                    - generic [ref=e654]: Wifi •
                    - generic [ref=e655]: Máy giặt •
                    - generic [ref=e656]: Tivi •
                    - generic [ref=e657]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e658]:
                  - generic [ref=e659]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e662] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e665]:
              - generic [ref=e667]:
                - generic: prev
                - generic [ref=e674]: next
                - button "Guest favorite" [ref=e681]:
                  - generic [ref=e682]: Guest favorite
                - button [ref=e683]:
                  - img [ref=e684]
              - generic [ref=e686]:
                - generic [ref=e687]:
                  - generic [ref=e688]:
                    - paragraph [ref=e689]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e690]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e692]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e693]:
                    - generic [ref=e694]: Wifi •
                    - generic [ref=e695]: Máy giặt •
                    - generic [ref=e696]: Tivi •
                    - generic [ref=e697]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e698]:
                  - generic [ref=e699]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e702] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e705]:
              - generic [ref=e707]:
                - generic: prev
                - generic [ref=e714]: next
                - button "Guest favorite" [ref=e721]:
                  - generic [ref=e722]: Guest favorite
                - button [ref=e723]:
                  - img [ref=e724]
              - generic [ref=e726]:
                - generic [ref=e727]:
                  - generic [ref=e728]:
                    - paragraph [ref=e729]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e730]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e732]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e733]:
                    - generic [ref=e734]: Wifi •
                    - generic [ref=e735]: Máy giặt •
                    - generic [ref=e736]: Tivi •
                    - generic [ref=e737]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e738]:
                  - generic [ref=e739]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e742] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e745]:
              - generic [ref=e747]:
                - generic: prev
                - generic [ref=e754]: next
                - button "Guest favorite" [ref=e761]:
                  - generic [ref=e762]: Guest favorite
                - button [ref=e763]:
                  - img [ref=e764]
              - generic [ref=e766]:
                - generic [ref=e767]:
                  - generic [ref=e768]:
                    - paragraph [ref=e769]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e770]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e772]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e773]:
                    - generic [ref=e774]: Wifi •
                    - generic [ref=e775]: Máy giặt •
                    - generic [ref=e776]: Tivi •
                    - generic [ref=e777]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e778]:
                  - generic [ref=e779]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e782] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e785]:
              - generic [ref=e787]:
                - generic: prev
                - generic [ref=e794]: next
                - button "Guest favorite" [ref=e801]:
                  - generic [ref=e802]: Guest favorite
                - button [ref=e803]:
                  - img [ref=e804]
              - generic [ref=e806]:
                - generic [ref=e807]:
                  - generic [ref=e808]:
                    - paragraph [ref=e809]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e810]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e812]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e813]:
                    - generic [ref=e814]: Wifi •
                    - generic [ref=e815]: Máy giặt •
                    - generic [ref=e816]: Tivi •
                    - generic [ref=e817]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e818]:
                  - generic [ref=e819]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e822] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e825]:
              - generic [ref=e827]:
                - generic: prev
                - generic [ref=e834]: next
                - button "Guest favorite" [ref=e841]:
                  - generic [ref=e842]: Guest favorite
                - button [ref=e843]:
                  - img [ref=e844]
              - generic [ref=e846]:
                - generic [ref=e847]:
                  - generic [ref=e848]:
                    - paragraph [ref=e849]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e850]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e852]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e853]:
                    - generic [ref=e854]: Wifi •
                    - generic [ref=e855]: Máy giặt •
                    - generic [ref=e856]: Tivi •
                    - generic [ref=e857]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e858]:
                  - generic [ref=e859]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e862] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e865]:
              - generic [ref=e867]:
                - generic: prev
                - generic [ref=e874]: next
                - button "Guest favorite" [ref=e881]:
                  - generic [ref=e882]: Guest favorite
                - button [ref=e883]:
                  - img [ref=e884]
              - generic [ref=e886]:
                - generic [ref=e887]:
                  - generic [ref=e888]:
                    - paragraph [ref=e889]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e890]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e892]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e893]:
                    - generic [ref=e894]: Wifi •
                    - generic [ref=e895]: Máy giặt •
                    - generic [ref=e896]: Tivi •
                    - generic [ref=e897]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e898]:
                  - generic [ref=e899]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e902] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e905]:
              - generic [ref=e907]:
                - generic: prev
                - generic [ref=e914]: next
                - button "Guest favorite" [ref=e921]:
                  - generic [ref=e922]: Guest favorite
                - button [ref=e923]:
                  - img [ref=e924]
              - generic [ref=e926]:
                - generic [ref=e927]:
                  - generic [ref=e928]:
                    - paragraph [ref=e929]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e930]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e932]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e933]:
                    - generic [ref=e934]: Wifi •
                    - generic [ref=e935]: Máy giặt •
                    - generic [ref=e936]: Tivi •
                    - generic [ref=e937]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e938]:
                  - generic [ref=e939]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e942] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e945]:
              - generic [ref=e947]:
                - generic: prev
                - generic [ref=e954]: next
                - button "Guest favorite" [ref=e961]:
                  - generic [ref=e962]: Guest favorite
                - button [ref=e963]:
                  - img [ref=e964]
              - generic [ref=e966]:
                - generic [ref=e967]:
                  - generic [ref=e968]:
                    - paragraph [ref=e969]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e970]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e972]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e973]:
                    - generic [ref=e974]: Wifi •
                    - generic [ref=e975]: Máy giặt •
                    - generic [ref=e976]: Tivi •
                    - generic [ref=e977]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e978]:
                  - generic [ref=e979]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e982] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e985]:
              - generic [ref=e987]:
                - generic: prev
                - generic [ref=e994]: next
                - button "Guest favorite" [ref=e1001]:
                  - generic [ref=e1002]: Guest favorite
                - button [ref=e1003]:
                  - img [ref=e1004]
              - generic [ref=e1006]:
                - generic [ref=e1007]:
                  - generic [ref=e1008]:
                    - paragraph [ref=e1009]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1010]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1012]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1013]:
                    - generic [ref=e1014]: Wifi •
                    - generic [ref=e1015]: Máy giặt •
                    - generic [ref=e1016]: Tivi •
                    - generic [ref=e1017]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1018]:
                  - generic [ref=e1019]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1022] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1025]:
              - generic [ref=e1027]:
                - generic: prev
                - generic [ref=e1034]: next
                - button "Guest favorite" [ref=e1041]:
                  - generic [ref=e1042]: Guest favorite
                - button [ref=e1043]:
                  - img [ref=e1044]
              - generic [ref=e1046]:
                - generic [ref=e1047]:
                  - generic [ref=e1048]:
                    - paragraph [ref=e1049]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1050]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1052]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1053]:
                    - generic [ref=e1054]: Wifi •
                    - generic [ref=e1055]: Máy giặt •
                    - generic [ref=e1056]: Tivi •
                    - generic [ref=e1057]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1058]:
                  - generic [ref=e1059]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1062] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1065]:
              - generic [ref=e1067]:
                - generic: prev
                - generic [ref=e1074]: next
                - button "Guest favorite" [ref=e1081]:
                  - generic [ref=e1082]: Guest favorite
                - button [ref=e1083]:
                  - img [ref=e1084]
              - generic [ref=e1086]:
                - generic [ref=e1087]:
                  - generic [ref=e1088]:
                    - paragraph [ref=e1089]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1090]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1092]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1093]:
                    - generic [ref=e1094]: Wifi •
                    - generic [ref=e1095]: Máy giặt •
                    - generic [ref=e1096]: Tivi •
                    - generic [ref=e1097]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1098]:
                  - generic [ref=e1099]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1102] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1105]:
              - generic [ref=e1107]:
                - generic: prev
                - generic [ref=e1114]: next
                - button "Guest favorite" [ref=e1121]:
                  - generic [ref=e1122]: Guest favorite
                - button [ref=e1123]:
                  - img [ref=e1124]
              - generic [ref=e1126]:
                - generic [ref=e1127]:
                  - generic [ref=e1128]:
                    - paragraph [ref=e1129]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1130]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1132]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1133]:
                    - generic [ref=e1134]: Wifi •
                    - generic [ref=e1135]: Máy giặt •
                    - generic [ref=e1136]: Tivi •
                    - generic [ref=e1137]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1138]:
                  - generic [ref=e1139]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1142] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1145]:
              - generic [ref=e1147]:
                - generic: prev
                - generic [ref=e1154]: next
                - button "Guest favorite" [ref=e1161]:
                  - generic [ref=e1162]: Guest favorite
                - button [ref=e1163]:
                  - img [ref=e1164]
              - generic [ref=e1166]:
                - generic [ref=e1167]:
                  - generic [ref=e1168]:
                    - paragraph [ref=e1169]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1170]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1172]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1173]:
                    - generic [ref=e1174]: Wifi •
                    - generic [ref=e1175]: Máy giặt •
                    - generic [ref=e1176]: Tivi •
                    - generic [ref=e1177]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1178]:
                  - generic [ref=e1179]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1182] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1185]:
              - generic [ref=e1187]:
                - generic: prev
                - generic [ref=e1194]: next
                - button "Guest favorite" [ref=e1201]:
                  - generic [ref=e1202]: Guest favorite
                - button [ref=e1203]:
                  - img [ref=e1204]
              - generic [ref=e1206]:
                - generic [ref=e1207]:
                  - generic [ref=e1208]:
                    - paragraph [ref=e1209]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1210]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1212]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1213]:
                    - generic [ref=e1214]: Wifi •
                    - generic [ref=e1215]: Máy giặt •
                    - generic [ref=e1216]: Tivi •
                    - generic [ref=e1217]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1218]:
                  - generic [ref=e1219]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1222] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1225]:
              - generic [ref=e1227]:
                - generic: prev
                - generic [ref=e1234]: next
                - button "Guest favorite" [ref=e1241]:
                  - generic [ref=e1242]: Guest favorite
                - button [ref=e1243]:
                  - img [ref=e1244]
              - generic [ref=e1246]:
                - generic [ref=e1247]:
                  - generic [ref=e1248]:
                    - paragraph [ref=e1249]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1250]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1252]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1253]:
                    - generic [ref=e1254]: Wifi •
                    - generic [ref=e1255]: Máy giặt •
                    - generic [ref=e1256]: Tivi •
                    - generic [ref=e1257]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1258]:
                  - generic [ref=e1259]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1262] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1265]:
              - generic [ref=e1267]:
                - generic: prev
                - generic [ref=e1274]: next
                - button "Guest favorite" [ref=e1281]:
                  - generic [ref=e1282]: Guest favorite
                - button [ref=e1283]:
                  - img [ref=e1284]
              - generic [ref=e1286]:
                - generic [ref=e1287]:
                  - generic [ref=e1288]:
                    - paragraph [ref=e1289]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1290]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1292]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1293]:
                    - generic [ref=e1294]: Wifi •
                    - generic [ref=e1295]: Máy giặt •
                    - generic [ref=e1296]: Tivi •
                    - generic [ref=e1297]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1298]:
                  - generic [ref=e1299]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1302] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1305]:
              - generic [ref=e1307]:
                - generic: prev
                - generic [ref=e1314]: next
                - button "Guest favorite" [ref=e1321]:
                  - generic [ref=e1322]: Guest favorite
                - button [ref=e1323]:
                  - img [ref=e1324]
              - generic [ref=e1326]:
                - generic [ref=e1327]:
                  - generic [ref=e1328]:
                    - paragraph [ref=e1329]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1330]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1332]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1333]:
                    - generic [ref=e1334]: Wifi •
                    - generic [ref=e1335]: Máy giặt •
                    - generic [ref=e1336]: Tivi •
                    - generic [ref=e1337]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1338]:
                  - generic [ref=e1339]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1342] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1345]:
              - generic [ref=e1347]:
                - generic: prev
                - generic [ref=e1354]: next
                - button "Guest favorite" [ref=e1361]:
                  - generic [ref=e1362]: Guest favorite
                - button [ref=e1363]:
                  - img [ref=e1364]
              - generic [ref=e1366]:
                - generic [ref=e1367]:
                  - generic [ref=e1368]:
                    - paragraph [ref=e1369]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1370]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1372]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1373]:
                    - generic [ref=e1374]: Wifi •
                    - generic [ref=e1375]: Máy giặt •
                    - generic [ref=e1376]: Tivi •
                    - generic [ref=e1377]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1378]:
                  - generic [ref=e1379]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1382] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1385]:
              - generic [ref=e1387]:
                - generic: prev
                - generic [ref=e1394]: next
                - button "Guest favorite" [ref=e1401]:
                  - generic [ref=e1402]: Guest favorite
                - button [ref=e1403]:
                  - img [ref=e1404]
              - generic [ref=e1406]:
                - generic [ref=e1407]:
                  - generic [ref=e1408]:
                    - paragraph [ref=e1409]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1410]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1412]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1413]:
                    - generic [ref=e1414]: Wifi •
                    - generic [ref=e1415]: Máy giặt •
                    - generic [ref=e1416]: Tivi •
                    - generic [ref=e1417]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1418]:
                  - generic [ref=e1419]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1422] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1425]:
              - generic [ref=e1427]:
                - generic: prev
                - generic [ref=e1434]: next
                - button "Guest favorite" [ref=e1441]:
                  - generic [ref=e1442]: Guest favorite
                - button [ref=e1443]:
                  - img [ref=e1444]
              - generic [ref=e1446]:
                - generic [ref=e1447]:
                  - generic [ref=e1448]:
                    - paragraph [ref=e1449]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1450]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1452]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1453]:
                    - generic [ref=e1454]: Wifi •
                    - generic [ref=e1455]: Máy giặt •
                    - generic [ref=e1456]: Tivi •
                    - generic [ref=e1457]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1458]:
                  - generic [ref=e1459]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1462] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1465]:
              - generic [ref=e1467]:
                - generic: prev
                - generic [ref=e1474]: next
                - button "Guest favorite" [ref=e1481]:
                  - generic [ref=e1482]: Guest favorite
                - button [ref=e1483]:
                  - img [ref=e1484]
              - generic [ref=e1486]:
                - generic [ref=e1487]:
                  - generic [ref=e1488]:
                    - paragraph [ref=e1489]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1490]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1492]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1493]:
                    - generic [ref=e1494]: Wifi •
                    - generic [ref=e1495]: Máy giặt •
                    - generic [ref=e1496]: Tivi •
                    - generic [ref=e1497]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1498]:
                  - generic [ref=e1499]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1502] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1505]:
              - generic [ref=e1507]:
                - generic: prev
                - generic [ref=e1514]: next
                - button "Guest favorite" [ref=e1521]:
                  - generic [ref=e1522]: Guest favorite
                - button [ref=e1523]:
                  - img [ref=e1524]
              - generic [ref=e1526]:
                - generic [ref=e1527]:
                  - generic [ref=e1528]:
                    - paragraph [ref=e1529]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1530]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1532]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1533]:
                    - generic [ref=e1534]: Wifi •
                    - generic [ref=e1535]: Máy giặt •
                    - generic [ref=e1536]: Tivi •
                    - generic [ref=e1537]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1538]:
                  - generic [ref=e1539]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1542] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1545]:
              - generic [ref=e1547]:
                - generic: prev
                - generic [ref=e1554]: next
                - button "Guest favorite" [ref=e1561]:
                  - generic [ref=e1562]: Guest favorite
                - button [ref=e1563]:
                  - img [ref=e1564]
              - generic [ref=e1566]:
                - generic [ref=e1567]:
                  - generic [ref=e1568]:
                    - paragraph [ref=e1569]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1570]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1572]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1573]:
                    - generic [ref=e1574]: Wifi •
                    - generic [ref=e1575]: Máy giặt •
                    - generic [ref=e1576]: Tivi •
                    - generic [ref=e1577]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1578]:
                  - generic [ref=e1579]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1582] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1585]:
              - generic [ref=e1587]:
                - generic: prev
                - generic [ref=e1594]: next
                - button "Guest favorite" [ref=e1601]:
                  - generic [ref=e1602]: Guest favorite
                - button [ref=e1603]:
                  - img [ref=e1604]
              - generic [ref=e1606]:
                - generic [ref=e1607]:
                  - generic [ref=e1608]:
                    - paragraph [ref=e1609]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1610]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1612]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1613]:
                    - generic [ref=e1614]: Wifi •
                    - generic [ref=e1615]: Máy giặt •
                    - generic [ref=e1616]: Tivi •
                    - generic [ref=e1617]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1618]:
                  - generic [ref=e1619]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1622] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1625]:
              - generic [ref=e1627]:
                - generic: prev
                - generic [ref=e1634]: next
                - button "Guest favorite" [ref=e1641]:
                  - generic [ref=e1642]: Guest favorite
                - button [ref=e1643]:
                  - img [ref=e1644]
              - generic [ref=e1646]:
                - generic [ref=e1647]:
                  - generic [ref=e1648]:
                    - paragraph [ref=e1649]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1650]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1652]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1653]:
                    - generic [ref=e1654]: Wifi •
                    - generic [ref=e1655]: Máy giặt •
                    - generic [ref=e1656]: Tivi •
                    - generic [ref=e1657]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1658]:
                  - generic [ref=e1659]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1662] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1665]:
              - generic [ref=e1667]:
                - generic: prev
                - generic [ref=e1674]: next
                - button "Guest favorite" [ref=e1681]:
                  - generic [ref=e1682]: Guest favorite
                - button [ref=e1683]:
                  - img [ref=e1684]
              - generic [ref=e1686]:
                - generic [ref=e1687]:
                  - generic [ref=e1688]:
                    - paragraph [ref=e1689]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1690]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1692]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1693]:
                    - generic [ref=e1694]: Wifi •
                    - generic [ref=e1695]: Máy giặt •
                    - generic [ref=e1696]: Tivi •
                    - generic [ref=e1697]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1698]:
                  - generic [ref=e1699]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1702] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1705]:
              - generic [ref=e1707]:
                - generic: prev
                - generic [ref=e1714]: next
                - button "Guest favorite" [ref=e1721]:
                  - generic [ref=e1722]: Guest favorite
                - button [ref=e1723]:
                  - img [ref=e1724]
              - generic [ref=e1726]:
                - generic [ref=e1727]:
                  - generic [ref=e1728]:
                    - paragraph [ref=e1729]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1730]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1732]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1733]:
                    - generic [ref=e1734]: Wifi •
                    - generic [ref=e1735]: Máy giặt •
                    - generic [ref=e1736]: Tivi •
                    - generic [ref=e1737]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1738]:
                  - generic [ref=e1739]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1742] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1745]:
              - generic [ref=e1747]:
                - generic: prev
                - generic [ref=e1754]: next
                - button "Guest favorite" [ref=e1761]:
                  - generic [ref=e1762]: Guest favorite
                - button [ref=e1763]:
                  - img [ref=e1764]
              - generic [ref=e1766]:
                - generic [ref=e1767]:
                  - generic [ref=e1768]:
                    - paragraph [ref=e1769]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1770]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1772]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1773]:
                    - generic [ref=e1774]: Wifi •
                    - generic [ref=e1775]: Máy giặt •
                    - generic [ref=e1776]: Tivi •
                    - generic [ref=e1777]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1778]:
                  - generic [ref=e1779]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1782] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1785]:
              - generic [ref=e1787]:
                - generic: prev
                - generic [ref=e1794]: next
                - button "Guest favorite" [ref=e1801]:
                  - generic [ref=e1802]: Guest favorite
                - button [ref=e1803]:
                  - img [ref=e1804]
              - generic [ref=e1806]:
                - generic [ref=e1807]:
                  - generic [ref=e1808]:
                    - paragraph [ref=e1809]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1810]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1812]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1813]:
                    - generic [ref=e1814]: Wifi •
                    - generic [ref=e1815]: Máy giặt •
                    - generic [ref=e1816]: Tivi •
                    - generic [ref=e1817]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1818]:
                  - generic [ref=e1819]: $ 28
                  - text: / đêm
          - link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm" [ref=e1822] [cursor=pointer]:
            - /url: /room-detail/1
            - generic [ref=e1825]:
              - generic [ref=e1827]:
                - generic: prev
                - generic [ref=e1834]: next
                - button "Guest favorite" [ref=e1841]:
                  - generic [ref=e1842]: Guest favorite
                - button [ref=e1843]:
                  - img [ref=e1844]
              - generic [ref=e1846]:
                - generic [ref=e1847]:
                  - generic [ref=e1848]:
                    - paragraph [ref=e1849]: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
                    - paragraph [ref=e1850]: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
                  - paragraph [ref=e1852]: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
                  - paragraph [ref=e1853]:
                    - generic [ref=e1854]: Wifi •
                    - generic [ref=e1855]: Máy giặt •
                    - generic [ref=e1856]: Tivi •
                    - generic [ref=e1857]: Đỗ xe •
                    - text: Hồ bơi
                - generic [ref=e1858]:
                  - generic [ref=e1859]: $ 28
                  - text: / đêm
    - generic [ref=e1860]:
      - generic [ref=e1861]:
        - generic [ref=e1862]:
          - heading "Giới thiệu" [level=2] [ref=e1863]
          - list [ref=e1864]:
            - listitem [ref=e1865]:
              - link "Phương thức hoạt động của Cyber" [ref=e1866] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1867]:
              - link "Trang tin tức" [ref=e1868] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1869]:
              - link "Nhà đầu tư" [ref=e1870] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1871]:
              - link "Cyber Plus" [ref=e1872] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1873]:
              - link "Cyber Luxe" [ref=e1874] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1875]:
              - link "HotelTonight" [ref=e1876] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1877]:
              - link "Cyber for Work" [ref=e1878] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1879]:
              - link "Nhờ có Host, mọi điều đều có thể" [ref=e1880] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1881]:
              - link "Cơ hội nghề nghiệp" [ref=e1882] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1883]:
              - link "Thư của nhà sáng lập" [ref=e1884] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e1885]:
          - heading "Cộng đồng" [level=2] [ref=e1886]
          - list [ref=e1887]:
            - listitem [ref=e1888]:
              - link "Sự đa đạng và Cảm giác thân thuộc" [ref=e1889] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1890]:
              - link "Tiện nghi phù hợp cho người khuyết tật" [ref=e1891] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1892]:
              - link "Đối tác liên kết Cyber" [ref=e1893] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1894]:
              - link "Chỗ ở cho tuyến đầu" [ref=e1895] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1896]:
              - link "Lượt giới thiệu của khách" [ref=e1897] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1898]:
              - link "CyberSoft.edu.vn" [ref=e1899] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e1900]:
          - heading "Đón tiếp khách" [level=2] [ref=e1901]
          - list [ref=e1902]:
            - listitem [ref=e1903]:
              - link "Cho thuê nhà" [ref=e1904] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1905]:
              - link "Tổ chức Trải nghiệm trực tuyến" [ref=e1906] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1907]:
              - link "Tổ chức Trải nghiệm" [ref=e1908] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1909]:
              - link "Đón tiếp khách có trách nhiệm" [ref=e1910] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1911]:
              - link "Trung tâm tài nguyên" [ref=e1912] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1913]:
              - link "Trung tâm cộng đồng" [ref=e1914] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
        - generic [ref=e1915]:
          - heading "Hỗ trợ" [level=2] [ref=e1916]
          - list [ref=e1917]:
            - listitem [ref=e1918]:
              - link "Biện pháp ứng phó đại dịch COVID-19" [ref=e1919] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1920]:
              - link "Trung tâm trợ giúp" [ref=e1921] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1922]:
              - link "Các tùy chọn hủy" [ref=e1923] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1924]:
              - link "Hỗ trợ khu dân cư" [ref=e1925] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
            - listitem [ref=e1926]:
              - link "Tin cây và an toàn" [ref=e1927] [cursor=pointer]:
                - /url: https://cybersoft.edu.vn
      - generic [ref=e1929]:
        - generic [ref=e1930]: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web.
        - generic [ref=e1931]:
          - img [ref=e1933]
          - text: Tiếng Việt (VN)
          - text: USD
          - generic [ref=e1935]: Hỗ trợ tài nguyên
  - img [ref=e1937] [cursor=pointer]
  - generic [ref=e1941]:
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
  - generic [ref=e1943]:
    - img "check-circle" [ref=e1944]:
      - img [ref=e1945]
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