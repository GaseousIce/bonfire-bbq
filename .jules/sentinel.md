## 2024-03-21 - Input Length Limits Enhancement
**Vulnerability:** Missing input length limits on reservation form fields (name, email) could lead to client-side or server-side Denial of Service (DoS) if large payloads are submitted, though currently the form is client-side only.
**Learning:** Even client-side mock forms should adhere to security best practices to ensure defense-in-depth when the form is eventually connected to a backend.
**Prevention:** Always include `maxlength` attributes on user input fields to restrict payload sizes at the first layer of defense.
