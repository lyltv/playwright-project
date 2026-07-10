# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard/avatar.spec.ts >> Dashboard - Update Avatar >> UPDATE_AVATAR_05: Should reject non-image file format
- Location: tests/dashboard/avatar.spec.ts:72:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/format|định dạng|không hợp lệ/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/format|định dạng|không hợp lệ/i)

```

```yaml
- navigation:
  - link "Cyber Logo CyberSoft":
    - /url: /
    - img "Cyber Logo"
    - text: CyberSoft
  - button "Open user menu Quyên Cập Nhật":
    - text: Open user menu
    - img
    - text: Quyên Cập Nhật
  - list:
    - listitem:
      - link "Home":
        - /url: /
    - listitem:
      - link "About":
        - /url: /info-user
    - listitem:
      - link "Services":
        - /url: /info-user
    - listitem:
      - link "Pricing":
        - /url: "#"
    - listitem:
      - link "Contact":
        - /url: "#"
- paragraph: Thông tin người dùng Quyên Cập Nhật
- button "Cập nhật ảnh"
- paragraph: Xác minh danh tính
- paragraph: Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
- button "Nhận huy hiệu"
- paragraph: Quyên Cập Nhật đã xác nhận
- paragraph: Địa chỉ email
- paragraph: Xin chào, tôi là Quyên Cập Nhật
- paragraph: Bắt đầu tham gia vào 2023
- button "Chỉnh sửa hồ sơ"
- heading "Phòng đã thuê" [level=1]
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh Phòng sang trọng với ban công tại D.1 - 200m đến Bitexco 2 khách • 1 phòng ngủ • 1 giường • 1 phòng tắm Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 17 / đêm":
  - /url: /room-detail/3
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: Phòng sang trọng với ban công tại D.1 - 200m đến Bitexco
  - paragraph: 2 khách • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 17 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- link "prev next Guest favorite Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh NewApt D1 - Cozy studio - NU apt - 500m Bui Vien! 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi $ 28 / đêm":
  - /url: /room-detail/1
  - text: prev next
  - button "Guest favorite"
  - button
  - paragraph: Toàn bộ căn hộ dịch vụ tại Hồ Chí Minh
  - paragraph: NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
  - paragraph: 3 khách • Phòng studio • 1 phòng ngủ • 1 giường • 1 phòng tắm
  - paragraph: Wifi • Máy giặt • Tivi • Đỗ xe • Hồ bơi
  - text: $ 28 / đêm
- heading "Giới thiệu" [level=2]
- list:
  - listitem:
    - link "Phương thức hoạt động của Cyber":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trang tin tức":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Nhà đầu tư":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber Plus":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber Luxe":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "HotelTonight":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cyber for Work":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Nhờ có Host, mọi điều đều có thể":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Cơ hội nghề nghiệp":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Thư của nhà sáng lập":
      - /url: https://cybersoft.edu.vn
- heading "Cộng đồng" [level=2]
- list:
  - listitem:
    - link "Sự đa đạng và Cảm giác thân thuộc":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tiện nghi phù hợp cho người khuyết tật":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Đối tác liên kết Cyber":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Chỗ ở cho tuyến đầu":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Lượt giới thiệu của khách":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "CyberSoft.edu.vn":
      - /url: https://cybersoft.edu.vn
- heading "Đón tiếp khách" [level=2]
- list:
  - listitem:
    - link "Cho thuê nhà":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tổ chức Trải nghiệm trực tuyến":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tổ chức Trải nghiệm":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Đón tiếp khách có trách nhiệm":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm tài nguyên":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm cộng đồng":
      - /url: https://cybersoft.edu.vn
- heading "Hỗ trợ" [level=2]
- list:
  - listitem:
    - link "Biện pháp ứng phó đại dịch COVID-19":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Trung tâm trợ giúp":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Các tùy chọn hủy":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Hỗ trợ khu dân cư":
      - /url: https://cybersoft.edu.vn
  - listitem:
    - link "Tin cây và an toàn":
      - /url: https://cybersoft.edu.vn
- text: © 2022 Nguyễn Nhật Sang, Inc.Quyền riêng tư.Điều khoản.Sơ đồ trang web. Tiếng Việt (VN)USDHỗ trợ tài nguyên
```

# Test source

```ts
  6   | 
  7   |     test('UPDATE_AVATAR_01: Should open photo update popup', async ({
  8   |         homePage,
  9   |         dashboardPage,
  10  |         page,
  11  |     }) => {
  12  |         await dashboardPage.loginAndGotoDashboard(homePage);
  13  |         await dashboardPage.openAvatarDialog();
  14  | 
  15  |         const dialog = page.getByRole('dialog');
  16  |         await expect(dialog).toBeVisible();
  17  | 
  18  |         // Popup có nút chọn file và nút upload
  19  |         const fileInput = dialog.locator('input[type="file"]');
  20  |         await expect(fileInput).toBeAttached();
  21  |         await expect(dialog.getByRole('button', { name: /Upload/i })).toBeVisible();
  22  |         await expect(dialog.getByRole('button', { name: 'Close' })).toBeVisible();
  23  |     });
  24  | 
  25  |     test('UPDATE_AVATAR_02: Should close photo update popup', async ({
  26  |         homePage,
  27  |         dashboardPage,
  28  |         page,
  29  |     }) => {
  30  |         await dashboardPage.loginAndGotoDashboard(homePage);
  31  |         await dashboardPage.openAvatarDialog();
  32  | 
  33  |         const dialog = page.getByRole('dialog');
  34  |         await expect(dialog).toBeVisible();
  35  | 
  36  |         await dialog.getByRole('button', { name: 'Close' }).click();
  37  |         await expect(dialog).toBeHidden();
  38  |     });
  39  | 
  40  |     test('UPDATE_AVATAR_03: Should upload image in correct format', async ({
  41  |         homePage,
  42  |         dashboardPage,
  43  |         page,
  44  |     }) => {
  45  |         await dashboardPage.loginAndGotoDashboard(homePage);
  46  |         await dashboardPage.openAvatarDialog();
  47  | 
  48  |         const dialog = page.getByRole('dialog');
  49  |         const fileInput = dialog.locator('input[type="file"]');
  50  | 
  51  |         // Upload ảnh JPG hợp lệ
  52  |         const testImagePath = path.resolve(__dirname, '../../test-data/valid-avatar.jpg');
  53  |         await fileInput.setInputFiles(testImagePath);
  54  |         await dialog.getByRole('button', { name: /Upload/i }).click();
  55  | 
  56  |         await expect(page.getByText(/thành công|success/i)).toBeVisible({ timeout: 10000 });
  57  |     });
  58  | 
  59  |     test('UPDATE_AVATAR_04: Should show error when no image selected', async ({
  60  |         homePage,
  61  |         dashboardPage,
  62  |         page,
  63  |     }) => {
  64  |         await dashboardPage.loginAndGotoDashboard(homePage);
  65  |         await dashboardPage.openAvatarDialog();
  66  | 
  67  |         const dialog = page.getByRole('dialog');
  68  |         await dialog.getByRole('button', { name: /Upload/i }).click();
  69  | 
  70  |         await expect(page.getByText(/chọn|select/i)).toBeVisible({ timeout: 5000 });
  71  |     });
  72  |     test('UPDATE_AVATAR_05: Should reject non-image file format', async ({
  73  |         homePage,
  74  |         dashboardPage,
  75  |         page,
  76  |     }) => {
  77  |         await dashboardPage.loginAndGotoDashboard(homePage);
  78  |         await page.waitForTimeout(2000);
  79  |         await dashboardPage.openAvatarDialog();
  80  | 
  81  |         const dialog = page.getByRole('dialog');
  82  |         await expect(dialog).toBeVisible({ timeout: 5000 });
  83  |         await dialog.locator('input[type="file"]').evaluate((el: HTMLInputElement) => {
  84  |             // Tạo một cục file PDF ảo bằng JS
  85  |             const dt = new DataTransfer();
  86  |             const file = new File(['dummy content'], 'invalid-file.pdf', {
  87  |                 type: 'application/pdf',
  88  |             });
  89  |             dt.items.add(file);
  90  | 
  91  |             // Gán thẳng vào thẻ HTML
  92  |             el.files = dt.files;
  93  | 
  94  |             // Kích hoạt sự kiện để React thức dậy và lưu file vào State
  95  |             el.dispatchEvent(new Event('input', { bubbles: true }));
  96  |             el.dispatchEvent(new Event('change', { bubbles: true }));
  97  |         });
  98  | 
  99  |         // 2. Chờ 0.5s. Lúc này ĐẢM BẢO chữ "No file chosen" SẼ BIẾN MẤT
  100 |         await page.waitForTimeout(500);
  101 | 
  102 |         // 3. Kéo cò
  103 |         await dialog.getByRole('button', { name: /Upload/i }).click();
  104 | 
  105 |         // 4. Bắt dính lỗi
> 106 |         await expect(page.getByText(/format|định dạng|không hợp lệ/i)).toBeVisible({
      |                                                                        ^ Error: expect(locator).toBeVisible() failed
  107 |             timeout: 5000,
  108 |         });
  109 |     });
  110 | 
  111 |     test('UPDATE_AVATAR_06: Should reject image exceeding file size limit', async ({
  112 |         homePage,
  113 |         dashboardPage,
  114 |         page,
  115 |     }) => {
  116 |         await dashboardPage.loginAndGotoDashboard(homePage);
  117 |         await dashboardPage.openAvatarDialog();
  118 | 
  119 |         const dialog = page.getByRole('dialog');
  120 |         const fileInput = dialog.locator('input[type="file"]');
  121 | 
  122 |         const testImagePath = path.resolve(__dirname, '../../test-data/large-image.jpg');
  123 |         await fileInput.setInputFiles(testImagePath);
  124 |         await dialog.getByRole('button', { name: /Upload/i }).click();
  125 | 
  126 |         await expect(page.getByText(/size|kích thước|dung lượng/i)).toBeVisible({ timeout: 5000 });
  127 |     });
  128 | 
  129 |     test('UPDATE_AVATAR_07: Should handle rectangular image upload', async ({
  130 |         homePage,
  131 |         dashboardPage,
  132 |         page,
  133 |     }) => {
  134 |         await dashboardPage.loginAndGotoDashboard(homePage);
  135 |         await dashboardPage.openAvatarDialog();
  136 | 
  137 |         const dialog = page.getByRole('dialog');
  138 |         const fileInput = dialog.locator('input[type="file"]');
  139 | 
  140 |         const testImagePath = path.resolve(__dirname, '../../test-data/rectangular-image.jpg');
  141 |         await fileInput.setInputFiles(testImagePath);
  142 |         await dialog.getByRole('button', { name: /Upload/i }).click();
  143 | 
  144 |         await expect(page.getByText(/thành công|success/i)).toBeVisible({ timeout: 10000 });
  145 | 
  146 |         // Avatar không bị overflow
  147 |         const avatar = page
  148 |             .locator('img[alt*="avatar"], img[alt*="Avatar"], .ant-avatar img')
  149 |             .first();
  150 |         if (await avatar.isVisible()) {
  151 |             const box = await avatar.boundingBox();
  152 |             if (box) {
  153 |                 expect(box.width).toBeGreaterThan(0);
  154 |                 expect(box.height).toBeGreaterThan(0);
  155 |             }
  156 |         }
  157 |     });
  158 | 
  159 |     test('UPDATE_AVATAR_08: Should handle multiple upload clicks', async ({
  160 |         homePage,
  161 |         dashboardPage,
  162 |         page,
  163 |     }) => {
  164 |         await dashboardPage.loginAndGotoDashboard(homePage);
  165 |         await dashboardPage.openAvatarDialog();
  166 | 
  167 |         const dialog = page.getByRole('dialog');
  168 |         const fileInput = dialog.locator('input[type="file"]');
  169 | 
  170 |         const testImagePath = path.resolve(__dirname, '../../test-data/valid-avatar.jpg');
  171 |         await fileInput.setInputFiles(testImagePath);
  172 | 
  173 |         const uploadBtn = dialog.getByRole('button', { name: /Upload/i });
  174 |         await Promise.all([uploadBtn.click(), uploadBtn.click({ delay: 50 })]);
  175 | 
  176 |         await page.waitForTimeout(3000);
  177 |         const successToasts = page.getByText(/thành công|success/i);
  178 |         const count = await successToasts.count();
  179 |         expect(count).toBeLessThanOrEqual(1);
  180 |     });
  181 | 
  182 |     test('UPDATE_AVATAR_09: Should persist avatar after page refresh', async ({
  183 |         homePage,
  184 |         dashboardPage,
  185 |         page,
  186 |     }) => {
  187 |         await dashboardPage.loginAndGotoDashboard(homePage);
  188 | 
  189 |         // Lấy src avatar hiện tại — tìm ảnh trên trang dashboard
  190 |         const avatar = page.locator('img').first();
  191 |         await avatar.getAttribute('src');
  192 | 
  193 |         await page.reload();
  194 |         await page.waitForLoadState('domcontentloaded');
  195 | 
  196 |         const avatarAfter = page.locator('img').first();
  197 |         const srcAfter = await avatarAfter.getAttribute('src');
  198 | 
  199 |         // Avatar phải giữ nguyên sau refresh
  200 |         expect(srcAfter).toBeTruthy();
  201 |     });
  202 | });
  203 | 
```