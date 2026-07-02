export const authEmailTemplate = (
  username: string,
  actionUrl: string,
  emailType: "VERIFY" | "RESET"
) => {
  const isVerify = emailType === "VERIFY";

  return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${isVerify ? "Verify Your Email" : "Reset Password"}</title>
</head>

<body style="
    margin:0;
    padding:0;
    background:#f3f4f6;
    font-family:Arial, Helvetica, sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 15px;">

<table width="600" cellpadding="0" cellspacing="0"
style="
background:#ffffff;
border-radius:18px;
overflow:hidden;
box-shadow:0 8px 30px rgba(0,0,0,.08);
">

<!-- Header -->
<tr>
<td
style="
background:linear-gradient(135deg,#4f46e5,#7c3aed);
padding:40px;
text-align:center;
">

<div style="
width:70px;
height:70px;
background:white;
border-radius:50%;
line-height:70px;
font-size:34px;
margin:auto;
">
🔐
</div>

<h1 style="
margin:20px 0 8px;
color:white;
font-size:32px;
">
AuthFlow
</h1>

<p style="
margin:0;
color:#dbeafe;
font-size:16px;
">
Secure Authentication System
</p>

</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:45px;">

<h2 style="
margin-top:0;
color:#111827;
font-size:28px;
">
Hello ${username} 👋
</h2>

<p style="
font-size:16px;
line-height:1.8;
color:#4b5563;
">

${
  isVerify
    ? "Welcome to <strong>AuthFlow</strong>! Thank you for signing up. To activate your account, please verify your email address."
    : "We received a request to reset your password. Click the button below to create a new password."
}

</p>

<div style="text-align:center;margin:45px 0;">

<a
href="${actionUrl}"

style="
background:#4f46e5;
color:white;
padding:16px 34px;
text-decoration:none;
font-size:16px;
font-weight:bold;
border-radius:10px;
display:inline-block;
">

${isVerify ? "Verify Email" : "Reset Password"}

</a>

</div>

<p style="
color:#6b7280;
font-size:15px;
line-height:1.7;
">

If the button above doesn't work, copy and paste the following link into your browser.

</p>

<p style="
word-break:break-word;
font-size:14px;
">

<a
href="${actionUrl}"
style="color:#4f46e5;"
>

${actionUrl}

</a>

</p>

<hr style="
border:none;
border-top:1px solid #e5e7eb;
margin:40px 0;
">

<p style="
font-size:14px;
color:#6b7280;
">

If you didn't request this email, you can safely ignore it.

</p>

</td>
</tr>

<!-- Footer -->

<tr>

<td
style="
background:#111827;
padding:30px;
text-align:center;
">

<p style="
margin:0;
color:#d1d5db;
font-size:18px;
font-weight:bold;
">

AuthFlow

</p>

<p style="
margin-top:10px;
color:#9ca3af;
font-size:14px;
">

Secure • Fast • Reliable

</p>

<p style="
margin-top:20px;
color:#6b7280;
font-size:13px;
">

© ${new Date().getFullYear()} AuthFlow. All Rights Reserved.

</p>

</td>

</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
};