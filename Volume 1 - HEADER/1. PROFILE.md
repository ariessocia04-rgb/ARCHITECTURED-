### PROFILE ARCHITECTURE
TECHNICIAN APPLICATION
└── HEADER
    └── PROFILE
        │
        ├── 1. Avatar
        │   ├── View Profile Picture
        │   ├── Upload Photo
        │   ├── Capture Photo
        │   ├── Change Photo
        │   ├── Crop Photo
        │   ├── Rotate Photo
        │   ├── Zoom
        │   ├── Preview
        │   ├── Remove Photo
        │   ├── Restore Default Avatar
        │   ├── Upload Progress
        │   ├── Upload Validation
        │   │   ├── JPG
        │   │   ├── PNG
        │   │   ├── WEBP
        │   │   ├── Max File Size
        │   │   ├── Minimum Resolution
        │   │   └── Maximum Resolution
        │   ├── Camera Permission
        │   ├── Upload History
        │   ├── Last Updated
        │   └── Audit Log
        │
        ├── 2. Personal Information
        │   │
        │   ├── Employee Name
        │   │   ├── First Name
        │   │   ├── Middle Name
        │   │   ├── Last Name
        │   │   ├── Extension Name
        │   │   ├── Display Name
        │   │   ├── Nickname
        │   │   ├── Validation
        │   │   ├── Required
        │   │   ├── Edit
        │   │   ├── Save
        │   │   ├── Cancel
        │   │   ├── History
        │   │   └── Audit Log
        │   │
        │   ├── Birthday
        │   │   ├── Calendar Picker
        │   │   ├── Age Calculation
        │   │   ├── Validation
        │   │   ├── Edit
        │   │   ├── Save
        │   │   └── History
        │   │
        │   ├── Gender
        │   │   ├── Male
        │   │   ├── Female
        │   │   ├── Prefer not to say
        │   │   ├── Validation
        │   │   └── History
        │   │
        │   ├── Civil Status
        │   │   ├── Single
        │   │   ├── Married
        │   │   ├── Widowed
        │   │   ├── Separated
        │   │   ├── Validation
        │   │   └── History
        │   │
        │   ├── Nationality
        │   │
        │   ├── Contact Information
        │   │   ├── Mobile Number
        │   │   ├── Secondary Mobile
        │   │   ├── Telephone
        │   │   ├── Email
        │   │   ├── Alternate Email
        │   │   ├── Validation
        │   │   ├── OTP Verification
        │   │   ├── Save
        │   │   └── History
        │   │
        │   ├── Address
        │   │   ├── House Number
        │   │   ├── Street
        │   │   ├── Barangay
        │   │   ├── Municipality
        │   │   ├── Province
        │   │   ├── Country
        │   │   ├── ZIP Code
        │   │   ├── Google Map
        │   │   └── Validation
        │   │
        │   ├── Emergency Contact
        │   │   ├── Full Name
        │   │   ├── Relationship
        │   │   ├── Contact Number
        │   │   ├── Alternate Contact
        │   │   ├── Address
        │   │   └── Validation
        │   │
        │   └── Personal Information Audit Trail
        │
        ├── 3. Employee Information
        │   │
        │   ├── Employee ID
        │   │   ├── Auto Generated
        │   │   ├── Manual Override (Owner Only)
        │   │   ├── Copy
        │   │   ├── Validation
        │   │   └── History
        │   │
        │   ├── QR Code
        │   │   ├── Generate
        │   │   ├── Regenerate
        │   │   ├── Preview
        │   │   ├── Download PNG
        │   │   ├── Download SVG
        │   │   ├── Print
        │   │   ├── Share
        │   │   ├── QR Authentication
        │   │   ├── Scan History
        │   │   └── Audit Trail
        │   │
        │   ├── Barcode
        │   │   ├── Generate
        │   │   ├── Print
        │   │   ├── Download
        │   │   ├── Scan Test
        │   │   ├── Barcode Authentication
        │   │   ├── History
        │   │   └── Audit Trail
        │   │
        │   ├── Branch
        │   ├── Department
        │   ├── Position
        │   ├── Technician Level
        │   ├── Employment Status
        │   ├── Employment Type
        │   ├── Date Hired
        │   ├── Years of Service
        │   ├── Supervisor
        │   ├── Assigned Service Center
        │   ├── Assigned Workstation
        │   ├── Assigned Locker
        │   ├── Uniform Size
        │   ├── Shift Assignment
        │   ├── Active Status
        │   ├── Suspension Status
        │   ├── Leave Status
        │   ├── Employee Notes
        │   └── Employee Audit Trail

├── 4. Skills & Certifications
│   │
│   ├── Skill Profile
│   │   ├── Primary Specialization
│   │   ├── Secondary Specialization
│   │   ├── Years of Experience
│   │   ├── Technician Rank
│   │   ├── Skill Score
│   │   ├── Experience Level
│   │   ├── Overall Rating
│   │   └── Skill Status
│   │
│   ├── Apple Repair
│   │   ├── iPhone
│   │   ├── iPad
│   │   ├── MacBook Air
│   │   ├── MacBook Pro
│   │   ├── Mac Mini
│   │   ├── iMac
│   │   ├── Vision Pro
│   │   ├── Apple Watch
│   │   ├── AirPods
│   │   ├── Hardware
│   │   ├── Software
│   │   ├── Board Level
│   │   └── Skill Rating
│   │
│   ├── Android Repair
│   │   ├── Samsung
│   │   ├── Xiaomi
│   │   ├── Huawei
│   │   ├── Oppo
│   │   ├── Vivo
│   │   ├── Realme
│   │   ├── Infinix
│   │   ├── Tecno
│   │   ├── Hardware
│   │   ├── Software
│   │   ├── Board Repair
│   │   └── Skill Rating
│   │
│   ├── Laptop Repair
│   │   ├── Acer
│   │   ├── Asus
│   │   ├── Lenovo
│   │   ├── HP
│   │   ├── Dell
│   │   ├── MSI
│   │   ├── Gigabyte
│   │   ├── ROG
│   │   ├── Predator
│   │   ├── Hardware
│   │   ├── Software
│   │   ├── Board Level
│   │   └── Skill Rating
│   │
│   ├── Console Repair
│   │   ├── Nintendo Switch
│   │   ├── PS4
│   │   ├── PS5
│   │   ├── Xbox
│   │   └── Steam Deck
│   │
│   ├── Certifications
│   │   ├── Certification Name
│   │   ├── Issued By
│   │   ├── Certificate Number
│   │   ├── Date Issued
│   │   ├── Expiration Date
│   │   ├── Upload Certificate
│   │   ├── Download Certificate
│   │   ├── Preview
│   │   ├── Verification Status
│   │   └── History
│   │
│   ├── Trainings
│   │   ├── Internal Training
│   │   ├── External Training
│   │   ├── Workshop
│   │   ├── Seminar
│   │   ├── Completed
│   │   ├── Pending
│   │   ├── Expired
│   │   └── Training History
│   │
│   └── Skill Audit Trail
│
├── 5. Account
│   │
│   ├── Username
│   │   ├── View
│   │   ├── Edit
│   │   ├── Validation
│   │   ├── Availability Check
│   │   └── History
│   │
│   ├── Email Login
│   │   ├── Primary Email
│   │   ├── Secondary Email
│   │   ├── Verify Email
│   │   ├── OTP
│   │   ├── Change Email
│   │   └── History
│   │
│   ├── Mobile Login
│   │   ├── Primary Number
│   │   ├── Secondary Number
│   │   ├── OTP Verification
│   │   ├── Change Number
│   │   └── History
│   │
│   ├── Password
│   │   ├── Current Password
│   │   ├── New Password
│   │   ├── Confirm Password
│   │   ├── Password Strength
│   │   ├── Password Policy
│   │   ├── Show Password
│   │   ├── Reset Password
│   │   └── Password History
│   │
│   ├── Two-Factor Authentication
│   │   ├── Enable
│   │   ├── Disable
│   │   ├── Email OTP
│   │   ├── SMS OTP
│   │   ├── Authenticator App
│   │   ├── Backup Codes
│   │   └── Recovery
│   │
│   ├── Login Preferences
│   │   ├── Remember Device
│   │   ├── Auto Login
│   │   ├── Session Timeout
│   │   ├── Device Limit
│   │   └── Concurrent Login
│   │
│   ├── Account Status
│   │   ├── Active
│   │   ├── Locked
│   │   ├── Suspended
│   │   ├── Disabled
│   │   ├── Pending Verification
│   │   └── Deleted
│   │
│   ├── Recovery
│   │   ├── Recovery Email
│   │   ├── Recovery Mobile
│   │   ├── Security Questions
│   │   ├── Backup Codes
│   │   └── Recovery History
│   │
│   └── Account Audit Trail
│
├── 6. Security
│   │
│   ├── Active Sessions
│   │   ├── Desktop
│   │   ├── Mobile
│   │   ├── Tablet
│   │   ├── Browser
│   │   ├── Last Activity
│   │   ├── IP Address
│   │   ├── Device Name
│   │   ├── Browser Version
│   │   ├── Operating System
│   │   ├── Logout Session
│   │   └── Logout All
