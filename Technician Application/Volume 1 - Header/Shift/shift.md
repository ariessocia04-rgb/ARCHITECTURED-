### 1. SHIFT ARCHITECTURE
TECHNICIAN APPLICATION
└── HEADER
    └── SHIFT
        │
        ├── 1. Current Shift
        │   │
        │   ├── Shift Status Card
        │   │   ├── Off Duty
        │   │   ├── Ready
        │   │   ├── Clocked In
        │   │   ├── Working
        │   │   ├── On Break
        │   │   ├── Lunch Break
        │   │   ├── Overtime
        │   │   ├── Clocked Out
        │   │   └── Shift Closed
        │   │
        │   ├── Shift Information
        │   │   ├── Shift ID
        │   │   ├── Shift Name
        │   │   ├── Assigned Branch
        │   │   ├── Department
        │   │   ├── Workstation
        │   │   ├── Shift Type
        │   │   │   ├── Morning
        │   │   │   ├── Afternoon
        │   │   │   ├── Night
        │   │   │   ├── Flexible
        │   │   │   └── Overtime
        │   │   ├── Shift Date
        │   │   ├── Scheduled Time In
        │   │   ├── Scheduled Time Out
        │   │   ├── Actual Time In
        │   │   ├── Actual Time Out
        │   │   ├── Total Hours
        │   │   ├── Break Hours
        │   │   ├── Working Hours
        │   │   └── Remaining Shift Time
        │   │
        │   ├── Shift Timer
        │   │   ├── Live Digital Clock
        │   │   ├── Elapsed Time
        │   │   ├── Remaining Time
        │   │   ├── Break Countdown
        │   │   ├── Lunch Countdown
        │   │   ├── Overtime Counter
        │   │   └── Shift End Countdown
        │   │
        │   ├── Shift Summary
        │   │   ├── Assigned Repairs
        │   │   ├── Completed Repairs
        │   │   ├── Pending Repairs
        │   │   ├── Waiting Approval
        │   │   ├── Waiting Parts
        │   │   ├── Testing Queue
        │   │   ├── Back Jobs
        │   │   ├── Warranty Repairs
        │   │   ├── Average Repair Time
        │   │   ├── Efficiency
        │   │   └── Productivity
        │   │
        │   ├── Shift Actions
        │   │   ├── Clock In
        │   │   ├── Clock Out
        │   │   ├── Start Break
        │   │   ├── End Break
        │   │   ├── Start Lunch
        │   │   ├── End Lunch
        │   │   ├── Request Overtime
        │   │   ├── End Overtime
        │   │   ├── Refresh
        │   │   └── View Shift Details
        │   │
        │   ├── QR Authentication
        │   │   ├── Scan Employee QR
        │   │   ├── Validate Employee
        │   │   ├── Confirm Attendance
        │   │   ├── QR Success
        │   │   ├── QR Failed
        │   │   └── Scan History
        │   │
        │   ├── Barcode Authentication
        │   │   ├── Scan Employee Barcode
        │   │   ├── Verify Employee
        │   │   ├── Confirm Identity
        │   │   ├── Success
        │   │   ├── Failed
        │   │   └── Scan History
        │   │
        │   ├── GPS Verification
        │   │   ├── Current Location
        │   │   ├── Branch Location
        │   │   ├── Distance Validation
        │   │   ├── GPS Accuracy
        │   │   ├── Allow Attendance
        │   │   ├── Reject Attendance
        │   │   └── GPS Logs
        │   │
        │   ├── Face Verification (Optional)
        │   │   ├── Open Camera
        │   │   ├── Face Detection
        │   │   ├── Face Match
        │   │   ├── Verification Success
        │   │   ├── Verification Failed
        │   │   └── Retry
        │   │
        │   ├── Shift Notifications
        │   │   ├── Shift Started
        │   │   ├── Shift Ending Soon
        │   │   ├── Break Reminder
        │   │   ├── Lunch Reminder
        │   │   ├── Overtime Reminder
        │   │   ├── Clock Out Reminder
        │   │   └── Missed Attendance Alert
        │   │
        │   ├── Business Rules
        │   │   ├── Technician must Clock In before accepting repairs
        │   │   ├── QR or Barcode authentication required
        │   │   ├── GPS validation required (if enabled)
        │   │   ├── Cannot Clock Out with unfinished repair unless confirmed
        │   │   ├── Break time deducted automatically
        │   │   ├── Overtime requires approval
        │   │   ├── Attendance automatically logged
        │   │   ├── All attendance changes recorded
        │   │   ├── Late attendance flagged
        │   │   ├── Early logout flagged
        │   │   └── Owner/Admin can manually override attendance
        │   │
        │   └── Audit Trail
        │       ├── Time In
        │       ├── Time Out
        │       ├── Break Logs
        │       ├── Lunch Logs
        │       ├── Overtime Logs
        │       ├── QR Scan Logs
        │       ├── Barcode Logs
        │       ├── GPS Logs
        │       ├── Device Information
        │       ├── IP Address
        │       ├── Browser
        │       ├── Operating System
        │       └── Activity History
SHIFT — PART 2

├── 2. Attendance
│   │
│   ├── Attendance Dashboard
│   │   ├── Today's Attendance
│   │   ├── Current Status
│   │   ├── Total Working Hours
│   │   ├── Break Hours
│   │   ├── Overtime Hours
│   │   ├── Late Minutes
│   │   ├── Undertime Minutes
│   │   ├── Attendance Score
│   │   └── Attendance Summary
│   │
│   ├── Clock In
│   │   ├── QR Authentication
│   │   ├── Employee Barcode Authentication
│   │   ├── Face Recognition (Optional)
│   │   ├── GPS Validation
│   │   ├── Device Validation
│   │   ├── Branch Validation
│   │   ├── Network Validation
│   │   ├── Confirm Attendance
│   │   ├── Success Screen
│   │   └── Failure Screen
│   │
│   ├── Clock Out
│   │   ├── Validate Pending Repairs
│   │   ├── Validate Draft Diagnosis
│   │   ├── Validate Draft Quotation
│   │   ├── Validate Pending Testing
│   │   ├── Validate Pending Upload
│   │   ├── Validate Waiting Parts
│   │   ├── Confirm Clock Out
│   │   ├── Success
│   │   └── Failed Validation
│   │
│   ├── Break Management
│   │   ├── Start Break
│   │   ├── End Break
│   │   ├── Break Duration
│   │   ├── Break Countdown
│   │   ├── Remaining Break Time
│   │   ├── Extra Break Request
│   │   ├── Break Approval
│   │   ├── Break History
│   │   └── Break Logs
│   │
│   ├── Lunch Management
│   │   ├── Start Lunch
│   │   ├── End Lunch
│   │   ├── Lunch Timer
│   │   ├── Lunch Countdown
│   │   ├── Remaining Lunch Time
│   │   ├── Lunch Extension
│   │   ├── Lunch Approval
│   │   └── Lunch Logs
│   │
│   ├── Attendance Calendar
│   │   ├── Daily View
│   │   ├── Weekly View
│   │   ├── Monthly View
│   │   ├── Yearly View
│   │   ├── Holiday Indicator
│   │   ├── Leave Indicator
│   │   ├── Overtime Indicator
│   │   ├── Late Indicator
│   │   └── Absent Indicator
│   │
│   ├── Attendance Statistics
│   │   ├── Days Present
│   │   ├── Days Absent
│   │   ├── Late Count
│   │   ├── Overtime Count
│   │   ├── Average Time In
│   │   ├── Average Time Out
│   │   ├── Attendance Percentage
│   │   ├── Productivity Correlation
│   │   └── Attendance Trend
│   │
│   ├── Attendance Corrections
│   │   ├── Missing Time In
│   │   ├── Missing Time Out
│   │   ├── Wrong Attendance
│   │   ├── Correction Request
│   │   ├── Reason
│   │   ├── Attachment
│   │   ├── Pending Approval
│   │   ├── Approved
│   │   ├── Rejected
│   │   └── Correction History
│   │
│   ├── Business Rules
│   │   ├── QR or Barcode required for attendance
│   │   ├── Face Verification optional
│   │   ├── GPS required if enabled by Owner
│   │   ├── Cannot Clock Out with unfinished mandatory tasks
│   │   ├── Attendance corrections require approval
│   │   ├── Break duration follows company policy
│   │   ├── Lunch duration follows company policy
│   │   ├── Late automatically computed
│   │   ├── Overtime requires approval
│   │   ├── Attendance cannot be edited by Technician
│   │   └── Every attendance action generates audit logs
│   │
│   └── Attendance Audit Trail
│       ├── Attendance ID
│       ├── Employee ID
│       ├── Attendance Date
│       ├── Time In
│       ├── Time Out
│       ├── Break Logs
│       ├── Lunch Logs
│       ├── Overtime Logs
│       ├── GPS Coordinates
│       ├── QR Scan Record
│       ├── Barcode Record
│       ├── Face Verification Record
│       ├── Device Used
│       ├── IP Address
│       ├── Browser
│       ├── Operating System
│       ├── Branch
│       ├── Correction Logs
│       └── Export Attendance
SHIFT — PART 3

├── 3. Shift Schedule
│   │
│   ├── Schedule Dashboard
│   │   ├── Today's Schedule
│   │   ├── Tomorrow's Schedule
│   │   ├── Weekly Schedule
│   │   ├── Monthly Schedule
│   │   ├── Upcoming Shifts
│   │   ├── Shift Timeline
│   │   ├── Assigned Branch
│   │   ├── Assigned Workstation
│   │   └── Schedule Summary
│   │
│   ├── Shift Details
│   │   ├── Shift ID
│   │   ├── Shift Name
│   │   ├── Shift Type
│   │   │   ├── Morning
│   │   │   ├── Afternoon
│   │   │   ├── Night
│   │   │   ├── Flexible
│   │   │   └── Overtime
│   │   ├── Scheduled Date
│   │   ├── Scheduled Time In
│   │   ├── Scheduled Time Out
│   │   ├── Break Schedule
│   │   ├── Lunch Schedule
│   │   ├── Expected Hours
│   │   ├── Assigned Branch
│   │   ├── Assigned Department
│   │   ├── Assigned Workstation
│   │   └── Assigned Supervisor
│   │
│   ├── Calendar View
│   │   ├── Daily
│   │   ├── Weekly
│   │   ├── Monthly
│   │   ├── Yearly
│   │   ├── Holiday View
│   │   ├── Leave View
│   │   ├── Overtime View
│   │   ├── Shift Color Legend
│   │   └── Calendar Filters
│   │
│   ├── Schedule Notifications
│   │   ├── New Schedule Assigned
│   │   ├── Schedule Updated
│   │   ├── Shift Reminder
│   │   ├── Shift Changed
│   │   ├── Overtime Assigned
│   │   ├── Holiday Schedule
│   │   ├── Emergency Shift
│   │   └── Cancellation Notice
│   │
│   ├── Leave Schedule
│   │   ├── Approved Leave
│   │   ├── Pending Leave
│   │   ├── Rejected Leave
│   │   ├── Sick Leave
│   │   ├── Vacation Leave
│   │   ├── Emergency Leave
│   │   ├── Leave Balance
│   │   └── Leave Calendar
│   │
│   ├── Schedule Requests
│   │   ├── Change Shift Request
│   │   ├── Swap Shift Request
│   │   ├── Overtime Request
│   │   ├── Leave Request
│   │   ├── Half-Day Request
│   │   ├── Early Out Request
│   │   ├── Late In Request
│   │   ├── Pending Approval
│   │   ├── Approved
│   │   └── Rejected
│   │
│   ├── Schedule Filters
│   │   ├── Date Range
│   │   ├── Shift Type
│   │   ├── Branch
│   │   ├── Department
│   │   ├── Supervisor
│   │   ├── Status
│   │   ├── Holiday
│   │   └── Overtime
│   │
│   ├── Business Rules
│   │   ├── Only Owner/Admin can assign schedules
│   │   ├── Technician cannot edit assigned schedules
│   │   ├── Shift changes require approval
│   │   ├── Shift swaps require approval from both technicians
│   │   ├── Leave requests follow company policy
│   │   ├── Overtime requests require approval
│   │   ├── Schedule notifications are automatic
│   │   ├── Schedule conflicts are prevented
│   │   ├── Double booking is not allowed
│   │   └── All changes recorded in audit logs
│   │
│   └── Schedule Audit Trail
│       ├── Schedule ID
│       ├── Assignment History
│       ├── Schedule Changes
│       ├── Leave Requests
│       ├── Overtime Requests
│       ├── Shift Swaps
│       ├── Approval Logs
│       ├── Updated By
│       ├── Date Updated
│       ├── IP Address
│       ├── Device
│       └── Export Schedule
SHIFT — PART 4

├── 4. Shift Status
│   │
│   ├── Live Shift Status
│   │   ├── Off Duty
│   │   ├── Ready
│   │   ├── Available
│   │   ├── Assigned
│   │   ├── Working
│   │   ├── Diagnosing
│   │   ├── Waiting Approval
│   │   ├── Waiting Parts
│   │   ├── Repairing
│   │   ├── Testing
│   │   ├── Quality Checking
│   │   ├── Cleaning Device
│   │   ├── Documentation
│   │   ├── Ready for Front Desk
│   │   ├── On Break
│   │   ├── Lunch Break
│   │   ├── Overtime
│   │   ├── Shift Ending
│   │   ├── Clocked Out
│   │   └── Offline
│   │
│   ├── Technician Availability
│   │   ├── Available
│   │   ├── Busy
│   │   ├── High Workload
│   │   ├── Fully Booked
│   │   ├── Idle
│   │   ├── Break
│   │   ├── Leave
│   │   ├── Absent
│   │   ├── Suspended
│   │   └── Inactive
│   │
│   ├── Live Job Status
│   │   ├── Assigned Jobs
│   │   ├── Active Repair
│   │   ├── Pending Diagnosis
│   │   ├── Pending Quote
│   │   ├── Waiting Customer Approval
│   │   ├── Waiting Inventory
│   │   ├── Repair In Progress
│   │   ├── Testing
│   │   ├── Ready for Release
│   │   ├── Warranty Repair
│   │   ├── Back Job
│   │   └── Closed
│   │
│   ├── Live Workload
│   │   ├── Total Assigned
│   │   ├── Current Active
│   │   ├── Waiting Queue
│   │   ├── Priority Queue
│   │   ├── Completed Today
│   │   ├── Remaining Today
│   │   ├── Estimated Finish Time
│   │   ├── Capacity Percentage
│   │   ├── Workload Indicator
│   │   └── Recommended Assignment
│   │
│   ├── Shift Timeline
│   │   ├── Shift Started
│   │   ├── First Repair
│   │   ├── Break Started
│   │   ├── Break Ended
│   │   ├── Lunch Started
│   │   ├── Lunch Ended
│   │   ├── Overtime Started
│   │   ├── Overtime Ended
│   │   ├── Shift Completed
│   │   └── Timeline History
│   │
│   ├── Status Quick Actions
│   │   ├── Set Available
│   │   ├── Start Break
│   │   ├── End Break
│   │   ├── Start Lunch
│   │   ├── End Lunch
│   │   ├── Request Overtime
│   │   ├── End Shift
│   │   ├── Refresh Status
│   │   └── View Details
│   │
│   ├── Real-Time Monitoring
│   │   ├── Current Device Repair
│   │   ├── Current Customer
│   │   ├── Current Job Order
│   │   ├── Repair Duration
│   │   ├── Idle Duration
│   │   ├── Waiting Duration
│   │   ├── Break Duration
│   │   ├── Last Activity
│   │   ├── Auto Refresh
│   │   └── Live Sync
│   │
│   ├── Alerts
│   │   ├── Shift Ending Soon
│   │   ├── Idle Too Long
│   │   ├── Repair Overdue
│   │   ├── Too Many Pending Jobs
│   │   ├── Waiting Approval Too Long
│   │   ├── Waiting Parts Too Long
│   │   ├── Missed Break
│   │   ├── Missed Lunch
│   │   ├── Overtime Required
│   │   └── Performance Alert
│   │
│   ├── Business Rules
│   │   ├── Status updates automatically based on repair stage
│   │   ├── Technician cannot manually set "Completed"
│   │   ├── Break status pauses workload timer
│   │   ├── Lunch status pauses productivity timer
│   │   ├── Working status requires active Job Order
│   │   ├── Testing status requires completed repair
│   │   ├── Ready for Release requires testing passed
│   │   ├── Offline after logout
│   │   ├── Every status change recorded
│   │   └── Owner/Admin can override status
│   │
│   └── Shift Status Audit Trail
│       ├── Status ID
│       ├── Previous Status
│       ├── Current Status
│       ├── Changed By
│       ├── Change Reason
│       ├── Related Job Order
│       ├── Timestamp
│       ├── Device
│       ├── Browser
│       ├── IP Address
│       ├── GPS Location (Optional)
│       └── Export Status History
SHIFT — PART 5

├── 5. Today's Assignment
│   │
│   ├── Assignment Dashboard
│   │   ├── Total Assigned Repairs
│   │   ├── Available Repairs
│   │   ├── Accepted Repairs
│   │   ├── Active Repairs
│   │   ├── Waiting Approval
│   │   ├── Waiting Parts
│   │   ├── Testing Queue
│   │   ├── Ready for Release
│   │   ├── Warranty Repairs
│   │   ├── Back Jobs
│   │   ├── Priority Repairs
│   │   ├── Normal Repairs
│   │   ├── Completed Today
│   │   ├── Remaining Jobs
│   │   └── Estimated Completion Time
│   │
│   ├── Assignment List
│   │   ├── Job Order Number
│   │   ├── QR Code
│   │   ├── Priority Badge
│   │   ├── Customer Name
│   │   ├── Contact Number
│   │   ├── Device Brand
│   │   ├── Device Model
│   │   ├── Device Color
│   │   ├── IMEI / Serial Number
│   │   ├── Reported Issue
│   │   ├── Physical Condition
│   │   ├── Accessories
│   │   ├── Front Desk Notes
│   │   ├── Diagnostic Fee Status
│   │   ├── Assigned Date
│   │   ├── Due Date
│   │   ├── Estimated Repair Time
│   │   ├── Current Status
│   │   └── Progress Percentage
│   │
│   ├── Assignment Details
│   │   ├── Customer Timeline
│   │   ├── Repair Timeline
│   │   ├── Uploaded Images
│   │   ├── Uploaded Videos
│   │   ├── Previous Repair History
│   │   ├── Warranty Status
│   │   ├── Back Job History
│   │   ├── Service History
│   │   ├── Device Checklist
│   │   └── Internal Notes
│   │
│   ├── Assignment Actions
│   │   ├── Accept Assignment
│   │   ├── Reject Assignment
│   │   ├── Transfer Request
│   │   ├── Open Job Order
│   │   ├── Scan Job QR
│   │   ├── Start Diagnosis
│   │   ├── Continue Repair
│   │   ├── View Timeline
│   │   ├── Refresh Assignment
│   │   └── Print Assignment
│   │
│   ├── Assignment Filters
│   │   ├── Today
│   │   ├── Tomorrow
│   │   ├── Date Range
│   │   ├── Priority
│   │   ├── Normal
│   │   ├── Warranty
│   │   ├── Back Job
│   │   ├── Device Brand
│   │   ├── Device Type
│   │   ├── Assigned Status
│   │   ├── Repair Status
│   │   ├── Due Today
│   │   ├── Overdue
│   │   └── Branch
│   │
│   ├── Search Assignment
│   │   ├── Job Order Number
│   │   ├── QR Scan
│   │   ├── Customer Name
│   │   ├── Mobile Number
│   │   ├── IMEI
│   │   ├── Serial Number
│   │   ├── Device Model
│   │   ├── Barcode
│   │   └── Keywords
│   │
│   ├── Assignment Notifications
│   │   ├── New Assignment
│   │   ├── Assignment Cancelled
│   │   ├── Assignment Updated
│   │   ├── Priority Assignment
│   │   ├── Warranty Assignment
│   │   ├── Back Job Assignment
│   │   ├── Due Soon
│   │   ├── Overdue Warning
│   │   ├── Customer Follow-up
│   │   └── Parts Available
│   │
│   ├── Business Rules
│   │   ├── System auto-assigns repair based on workload
│   │   ├── Technician may accept only available assignments
│   │   ├── Rejection requires reason
│   │   ├── Transfer requires Owner/Admin approval
│   │   ├── Priority jobs appear at top
│   │   ├── Warranty jobs are highlighted
│   │   ├── Back Jobs require previous repair history
│   │   ├── QR opens Job Order directly
│   │   ├── Every assignment action is logged
│   │   └── Assignment history cannot be deleted
│   │
│   └── Assignment Audit Trail
│       ├── Assignment ID
│       ├── Job Order Number
│       ├── Assigned By
│       ├── Assigned To
│       ├── Accepted Time
│       ├── Rejected Time
│       ├── Transfer History
│       ├── Status Changes
│       ├── Timestamp
│       ├── Device Used
│       ├── IP Address
│       └── Export Assignment History
SHIFT — PART 6

├── 6. Shift Performance
│   │
│   ├── Performance Dashboard
│   │   ├── Overall Performance Score
│   │   ├── Performance Grade (A+ to F)
│   │   ├── Monthly Ranking
│   │   ├── Branch Ranking
│   │   ├── Team Ranking
│   │   ├── Technician Level
│   │   ├── Performance Badge
│   │   ├── Achievement Progress
│   │   ├── Monthly Goal Progress
│   │   └── Performance Summary
│   │
│   ├── Productivity Metrics
│   │   ├── Total Assigned Repairs
│   │   ├── Accepted Repairs
│   │   ├── Completed Repairs
│   │   ├── Active Repairs
│   │   ├── Average Repair Time
│   │   ├── Average Diagnosis Time
│   │   ├── Average Testing Time
│   │   ├── Total Working Hours
│   │   ├── Utilization Rate
│   │   ├── Idle Time
│   │   ├── Efficiency Score
│   │   └── Productivity Percentage
│   │
│   ├── Repair Statistics
│   │   ├── Successful Repairs
│   │   ├── Failed Repairs
│   │   ├── Warranty Repairs
│   │   ├── Warranty Return Rate
│   │   ├── Back Jobs
│   │   ├── Back Job Percentage
│   │   ├── First-Time Fix Rate
│   │   ├── Average Customer Wait Time
│   │   ├── Average Repair Cost
│   │   └── Labor Hours Used
│   │
│   ├── Customer Satisfaction
│   │   ├── Overall Rating
│   │   ├── Total Reviews
│   │   ├── Positive Reviews
│   │   ├── Neutral Reviews
│   │   ├── Negative Reviews
│   │   ├── Complaint Count
│   │   ├── Compliment Count
│   │   ├── Satisfaction Percentage
│   │   ├── Average Response Time
│   │   └── Feedback History
│   │
│   ├── Performance Charts
│   │   ├── Daily Chart
│   │   ├── Weekly Chart
│   │   ├── Monthly Chart
│   │   ├── Yearly Chart
│   │   ├── Repair Trend
│   │   ├── Productivity Trend
│   │   ├── Back Job Trend
│   │   ├── Warranty Trend
│   │   ├── Attendance Trend
│   │   └── Target Progress Chart
│   │
│   ├── Achievements
│   │   ├── Fastest Repair
│   │   ├── Highest Monthly Repairs
│   │   ├── Highest Customer Rating
│   │   ├── Zero Back Job Award
│   │   ├── Perfect Attendance
│   │   ├── Top Technician
│   │   ├── Best Productivity
│   │   ├── Longest Repair Streak
│   │   ├── Achievement History
│   │   └── Reward Status
│   │
│   ├── Performance Comparison
│   │   ├── Previous Day
│   │   ├── Previous Week
│   │   ├── Previous Month
│   │   ├── Previous Year
│   │   ├── Team Average
│   │   ├── Branch Average
│   │   ├── Company Average
│   │   ├── Personal Best
│   │   └── Performance Difference
│   │
│   ├── Filters
│   │   ├── Today
│   │   ├── This Week
│   │   ├── This Month
│   │   ├── This Quarter
│   │   ├── This Year
│   │   ├── Custom Date
│   │   ├── Branch
│   │   ├── Department
│   │   ├── Technician
│   │   └── Device Type
│   │
│   ├── Export
│   │   ├── PDF
│   │   ├── Excel
│   │   ├── CSV
│   │   ├── Print
│   │   └── Share Report
│   │
│   ├── Business Rules
│   │   ├── Performance computed automatically
│   │   ├── Owner/Admin defines KPI formula
│   │   ├── Rankings update in real time
│   │   ├── Back Jobs reduce performance score
│   │   ├── Warranty returns affect KPI
│   │   ├── Customer ratings affect performance
│   │   ├── Attendance affects productivity score
│   │   ├── Technician cannot edit performance data
│   │   ├── Every KPI calculation is logged
│   │   └── Historical performance cannot be modified
│   │
│   └── Performance Audit Trail
│       ├── KPI Calculation Logs
│       ├── Performance Updates
│       ├── Ranking Changes
│       ├── Award History
│       ├── Customer Rating Logs
│       ├── Attendance Correlation
│       ├── Timestamp
│       ├── Generated By
│       ├── Device
│       ├── IP Address
│       └── Export History
SHIFT — PART 7

├── 7. Monthly Target
│   │
│   ├── Monthly Target Dashboard
│   │   ├── Current Month
│   │   ├── Monthly Progress
│   │   ├── Overall Completion %
│   │   ├── Monthly Performance Grade
│   │   ├── Current Rank
│   │   ├── Branch Rank
│   │   ├── Company Rank
│   │   ├── KPI Status
│   │   ├── Target Achievement
│   │   └── Estimated Completion
│   │
│   ├── Repair Target
│   │   ├── Assigned Target
│   │   ├── Completed Repairs
│   │   ├── Remaining Repairs
│   │   ├── Daily Required Repairs
│   │   ├── Weekly Required Repairs
│   │   ├── Completion Percentage
│   │   ├── Today's Repairs
│   │   ├── Yesterday Repairs
│   │   ├── Average Repairs Per Day
│   │   ├── Best Repair Day
│   │   ├── Worst Repair Day
│   │   └── Trend Graph
│   │
│   ├── Revenue Target
│   │   ├── Monthly Revenue Goal
│   │   ├── Generated Revenue
│   │   ├── Remaining Revenue
│   │   ├── Labor Revenue
│   │   ├── Parts Revenue
│   │   ├── Average Revenue Per Repair
│   │   ├── Daily Revenue
│   │   ├── Weekly Revenue
│   │   ├── Revenue Trend
│   │   └── Forecast Revenue
│   │
│   ├── Efficiency Target
│   │   ├── Target Repair Time
│   │   ├── Actual Average Repair Time
│   │   ├── Diagnosis Speed
│   │   ├── Testing Speed
│   │   ├── Productivity %
│   │   ├── Utilization %
│   │   ├── Idle Time
│   │   ├── Working Hours
│   │   ├── Efficiency Trend
│   │   └── Performance Score
│   │
│   ├── Quality Target
│   │   ├── Back Job Target
│   │   ├── Current Back Jobs
│   │   ├── Warranty Returns
│   │   ├── First Time Fix Rate
│   │   ├── Testing Pass Rate
│   │   ├── Quality Score
│   │   ├── Customer Rating
│   │   ├── Complaint Count
│   │   ├── Positive Feedback
│   │   └── Quality Trend
│   │
│   ├── Attendance Target
│   │   ├── Attendance %
│   │   ├── Late Count
│   │   ├── Absent Count
│   │   ├── Overtime Hours
│   │   ├── Perfect Attendance Status
│   │   ├── Attendance Trend
│   │   ├── Punctuality Score
│   │   ├── Shift Compliance
│   │   ├── Working Days
│   │   └── Attendance KPI
│   │
│   ├── Achievement Progress
│   │   ├── Bronze Level
│   │   ├── Silver Level
│   │   ├── Gold Level
│   │   ├── Platinum Level
│   │   ├── Diamond Level
│   │   ├── Elite Technician
│   │   ├── Badge Collection
│   │   ├── Achievement Timeline
│   │   ├── Rewards Earned
│   │   └── Next Achievement
│   │
│   ├── Bonus & Incentives
│   │   ├── Incentive Target
│   │   ├── Current Incentive
│   │   ├── Estimated Bonus
│   │   ├── Commission
│   │   ├── Monthly Reward
│   │   ├── Attendance Bonus
│   │   ├── Performance Bonus
│   │   ├── Sales Bonus
│   │   ├── Repair Bonus
│   │   └── Bonus History
│   │
│   ├── Monthly Charts
│   │   ├── KPI Progress Chart
│   │   ├── Revenue Chart
│   │   ├── Repair Chart
│   │   ├── Quality Chart
│   │   ├── Attendance Chart
│   │   ├── Efficiency Chart
│   │   ├── Performance Trend
│   │   ├── Comparison Chart
│   │   ├── Goal Progress
│   │   └── Forecast Chart
│   │
│   ├── Leaderboard
│   │   ├── Branch Ranking
│   │   ├── Company Ranking
│   │   ├── Daily Ranking
│   │   ├── Weekly Ranking
│   │   ├── Monthly Ranking
│   │   ├── Highest Revenue
│   │   ├── Highest Repairs
│   │   ├── Highest Rating
│   │   ├── Best Quality
│   │   └── Top Performer
│   │
│   ├── Filters
│   │   ├── Current Month
│   │   ├── Previous Month
│   │   ├── Quarter
│   │   ├── Year
│   │   ├── Branch
│   │   ├── Technician
│   │   ├── Device Type
│   │   ├── Service Type
│   │   ├── Priority Jobs
│   │   └── Warranty Jobs
│   │
│   ├── Export
│   │   ├── PDF
│   │   ├── Excel
│   │   ├── CSV
│   │   ├── Print
│   │   └── Share Report
│   │
│   ├── Business Rules
│   │   ├── Monthly targets are created by Owner/Admin
│   │   ├── KPIs update automatically in real time
│   │   ├── Revenue is based on completed repairs only
│   │   ├── Cancelled jobs are excluded
│   │   ├── Back Jobs reduce quality score
│   │   ├── Warranty returns reduce KPI score
│   │   ├── Customer ratings affect overall performance
│   │   ├── Incentives calculated automatically
│   │   ├── Historical targets cannot be edited
│   │   ├── All KPI calculations are logged
│   │   └── Only Owner/Admin can modify targets
│   │
│   └── Audit Trail
│       ├── Target Creation
│       ├── KPI Calculation
│       ├── Monthly Updates
│       ├── Bonus Calculation
│       ├── Ranking Updates
│       ├── Achievement Unlock
│       ├── Reward Logs
│       ├── Generated Reports
│       ├── Export History
│       ├── Timestamp
│       ├── User
│       └── Device Information
SHIFT — PART 8

├── 8. Overtime
│   │
│   ├── Overtime Dashboard
│   │   ├── Current Overtime Status
│   │   ├── Overtime Today
│   │   ├── Weekly Overtime
│   │   ├── Monthly Overtime
│   │   ├── Approved Overtime
│   │   ├── Pending Approval
│   │   ├── Rejected Requests
│   │   ├── Remaining Overtime Hours
│   │   ├── Estimated Overtime Pay
│   │   └── Overtime Summary
│   │
│   ├── Overtime Request
│   │   ├── Create Request
│   │   ├── Request Number
│   │   ├── Request Date
│   │   ├── Start Time
│   │   ├── End Time
│   │   ├── Estimated Hours
│   │   ├── Actual Hours
│   │   ├── Branch
│   │   ├── Department
│   │   ├── Supervisor
│   │   ├── Reason
│   │   ├── Priority Level
│   │   ├── Attachment
│   │   ├── Save Draft
│   │   ├── Submit Request
│   │   └── Cancel Request
│   │
│   ├── Approval Workflow
│   │   ├── Draft
│   │   ├── Submitted
│   │   ├── Pending Approval
│   │   ├── Under Review
│   │   ├── Approved
│   │   ├── Rejected
│   │   ├── Cancelled
│   │   ├── Completed
│   │   ├── Approval Timeline
│   │   └── Approval History
│   │
│   ├── Overtime Details
│   │   ├── Overtime ID
│   │   ├── Job Order Number
│   │   ├── Related Customer
│   │   ├── Device Model
│   │   ├── Repair Type
│   │   ├── Reason Category
│   │   │   ├── High Repair Volume
│   │   │   ├── Priority Repair
│   │   │   ├── Emergency Repair
│   │   │   ├── Waiting Customer
│   │   │   ├── Waiting Release
│   │   │   ├── Back Job
│   │   │   ├── Warranty Repair
│   │   │   ├── Inventory Delay
│   │   │   └── Other
│   │   ├── Requested Hours
│   │   ├── Approved Hours
│   │   ├── Actual Hours
│   │   ├── Remaining Hours
│   │   └── Remarks
│   │
│   ├── Live Overtime Timer
│   │   ├── Overtime Started
│   │   ├── Current Time
│   │   ├── Elapsed Time
│   │   ├── Remaining Approved Time
│   │   ├── Pause Timer
│   │   ├── Resume Timer
│   │   ├── Stop Timer
│   │   ├── Auto Stop
│   │   └── Live Duration
│   │
│   ├── Overtime Statistics
│   │   ├── Total OT Hours
│   │   ├── Average OT Hours
│   │   ├── Highest OT Day
│   │   ├── Lowest OT Day
│   │   ├── OT Frequency
│   │   ├── OT Efficiency
│   │   ├── OT Productivity
│   │   ├── OT Completion Rate
│   │   ├── OT Revenue Generated
│   │   └── OT Cost
│   │
│   ├── Overtime Calendar
│   │   ├── Daily View
│   │   ├── Weekly View
│   │   ├── Monthly View
│   │   ├── Scheduled OT
│   │   ├── Approved OT
│   │   ├── Completed OT
│   │   ├── Rejected OT
│   │   ├── Holiday OT
│   │   └── Calendar Filters
│   │
│   ├── Search & Filters
│   │   ├── Request Number
│   │   ├── Job Order Number
│   │   ├── QR Scan
│   │   ├── Date Range
│   │   ├── Status
│   │   ├── Approval Status
│   │   ├── Branch
│   │   ├── Technician
│   │   ├── Supervisor
│   │   ├── Priority
│   │   └── Reason
│   │
│   ├── Notifications
│   │   ├── OT Request Submitted
│   │   ├── OT Approved
│   │   ├── OT Rejected
│   │   ├── OT Starting Soon
│   │   ├── OT Ending Soon
│   │   ├── OT Time Limit Reached
│   │   ├── Supervisor Message
│   │   ├── System Reminder
│   │   ├── Payroll Notification
│   │   └── Owner Notification
│   │
│   ├── Export
│   │   ├── PDF
│   │   ├── Excel
│   │   ├── CSV
│   │   ├── Print
│   │   └── Share
│   │
│   ├── Business Rules
│   │   ├── Only Clocked-In technicians can request OT
│   │   ├── Owner/Admin approval required before OT starts
│   │   ├── Emergency OT may bypass approval if configured
│   │   ├── OT starts only after regular shift ends
│   │   ├── Every OT request receives a unique Request Number
│   │   ├── OT linked to Job Order when applicable
│   │   ├── OT automatically stops at approved limit
│   │   ├── All OT hours included in payroll computation
│   │   ├── All approvals recorded in Audit Trail
│   │   ├── Technician cannot edit approved OT records
│   │   └── Only Owner/Admin can modify completed OT records
│   │
│   └── Audit Trail
│       ├── Request Created
│       ├── Request Updated
│       ├── Request Submitted
│       ├── Approval History
│       ├── Rejection History
│       ├── Start Time
│       ├── End Time
│       ├── Actual Duration
│       ├── Job Order Link
│       ├── User
│       ├── Timestamp
│       ├── Device
│       ├── IP Address
│       ├── Browser
│       └── Export History
SHIFT — PART 9

├── 9. Attendance History
│   │
│   ├── Attendance Dashboard
│   │   ├── Total Attendance Records
│   │   ├── Days Present
│   │   ├── Days Absent
│   │   ├── Late Count
│   │   ├── Undertime Count
│   │   ├── Overtime Days
│   │   ├── Leave Days
│   │   ├── Holiday Worked
│   │   ├── Attendance Percentage
│   │   ├── Punctuality Score
│   │   ├── Average Working Hours
│   │   └── Attendance Summary
│   │
│   ├── Attendance Records
│   │   ├── Attendance ID
│   │   ├── Employee ID
│   │   ├── Employee Name
│   │   ├── Attendance Date
│   │   ├── Day of Week
│   │   ├── Shift Name
│   │   ├── Scheduled Time In
│   │   ├── Scheduled Time Out
│   │   ├── Actual Time In
│   │   ├── Actual Time Out
│   │   ├── Break Start
│   │   ├── Break End
│   │   ├── Lunch Start
│   │   ├── Lunch End
│   │   ├── Total Break Time
│   │   ├── Total Lunch Time
│   │   ├── Working Hours
│   │   ├── Overtime Hours
│   │   ├── Late Minutes
│   │   ├── Undertime Minutes
│   │   ├── Attendance Status
│   │   │   ├── Present
│   │   │   ├── Late
│   │   │   ├── Absent
│   │   │   ├── Leave
│   │   │   ├── Holiday
│   │   │   ├── Half Day
│   │   │   ├── Overtime
│   │   │   └── Corrected
│   │   └── Remarks
│   │
│   ├── Attendance Timeline
│   │   ├── Clock In
│   │   ├── Break Start
│   │   ├── Break End
│   │   ├── Lunch Start
│   │   ├── Lunch End
│   │   ├── Resume Work
│   │   ├── Overtime Start
│   │   ├── Overtime End
│   │   ├── Clock Out
│   │   └── Daily Timeline
│   │
│   ├── Attendance Analytics
│   │   ├── Monthly Attendance Chart
│   │   ├── Weekly Attendance Chart
│   │   ├── Yearly Attendance Chart
│   │   ├── Working Hours Trend
│   │   ├── Late Trend
│   │   ├── Overtime Trend
│   │   ├── Leave Trend
│   │   ├── Attendance Heatmap
│   │   ├── Attendance Score Trend
│   │   └── Productivity Comparison
│   │
│   ├── Attendance Details
│   │   ├── QR Authentication Log
│   │   ├── Barcode Authentication Log
│   │   ├── Face Verification Log
│   │   ├── GPS Verification
│   │   ├── Device Used
│   │   ├── Browser
│   │   ├── Operating System
│   │   ├── IP Address
│   │   ├── Branch
│   │   └── Location Map
│   │
│   ├── Search
│   │   ├── Attendance ID
│   │   ├── Employee ID
│   │   ├── Employee Name
│   │   ├── QR Scan
│   │   ├── Barcode Scan
│   │   ├── Date
│   │   ├── Month
│   │   ├── Year
│   │   ├── Branch
│   │   └── Status
│   │
│   ├── Filters
│   │   ├── Today
│   │   ├── Yesterday
│   │   ├── This Week
│   │   ├── Last Week
│   │   ├── This Month
│   │   ├── Last Month
│   │   ├── This Year
│   │   ├── Custom Date Range
│   │   ├── Attendance Status
│   │   ├── Shift
│   │   ├── Branch
│   │   ├── Department
│   │   └── Overtime Only
│   │
│   ├── Export
│   │   ├── Export PDF
│   │   ├── Export Excel
│   │   ├── Export CSV
│   │   ├── Print Attendance
│   │   ├── Payroll Export
│   │   └── Share Report
│   │
│   ├── Business Rules
│   │   ├── Attendance history is read-only
│   │   ├── Corrections require Owner/Admin approval
│   │   ├── QR, Barcode and GPS logs cannot be modified
│   │   ├── Attendance automatically syncs with payroll
│   │   ├── Attendance affects KPI and Monthly Target
│   │   ├── Attendance records are retained permanently
│   │   ├── Deleted attendance records are not allowed
│   │   ├── Every correction generates audit logs
│   │   ├── Historical attendance cannot be overwritten
│   │   └── Export follows user permissions
│   │
│   └── Audit Trail
│       ├── Attendance Created
│       ├── Attendance Corrected
│       ├── Correction Approval
│       ├── QR Scan History
│       ├── Barcode Scan History
│       ├── Face Verification History
│       ├── GPS Verification History
│       ├── Export History
│       ├── Timestamp
│       ├── User
│       ├── Device
│       ├── Browser
│       ├── IP Address
│       └── Activity Logs
SHIFT — PART 10 (FINAL)

├── 10. Shift Settings
│   │
│   ├── General Settings
│   │   ├── Default Shift
│   │   ├── Preferred Branch
│   │   ├── Preferred Workstation
│   │   ├── Preferred Language
│   │   ├── Time Zone
│   │   ├── Date Format
│   │   ├── Time Format (12H / 24H)
│   │   ├── Default Dashboard View
│   │   ├── Auto Refresh Interval
│   │   ├── Session Timeout
│   │   └── Save Preferences
│   │
│   ├── Attendance Preferences
│   │   ├── Default Clock-In Method
│   │   │   ├── QR Code
│   │   │   ├── Employee Barcode
│   │   │   ├── Face Recognition
│   │   │   └── Manual (If Authorized)
│   │   ├── Attendance Reminder
│   │   ├── Late Reminder
│   │   ├── Clock-Out Reminder
│   │   ├── Break Reminder
│   │   ├── Lunch Reminder
│   │   ├── Overtime Reminder
│   │   ├── Shift End Reminder
│   │   ├── Attendance Notifications
│   │   └── Attendance Preferences
│   │
│   ├── Notification Preferences
│   │   ├── Enable Push Notifications
│   │   ├── Enable Email Notifications
│   │   ├── Enable SMS Notifications
│   │   ├── Repair Assignment Alerts
│   │   ├── Priority Repair Alerts
│   │   ├── Warranty Repair Alerts
│   │   ├── Back Job Alerts
│   │   ├── Shift Alerts
│   │   ├── Attendance Alerts
│   │   ├── Inventory Alerts
│   │   ├── Overtime Alerts
│   │   └── Sound & Vibration
│   │
│   ├── Dashboard Preferences
│   │   ├── Default Landing Page
│   │   ├── Dashboard Layout
│   │   ├── Visible KPI Cards
│   │   ├── Quick Actions
│   │   ├── Favorite Widgets
│   │   ├── Compact View
│   │   ├── Expanded View
│   │   ├── Dark Mode
│   │   ├── Light Mode
│   │   ├── System Theme
│   │   └── Dashboard Reset
│   │
│   ├── Privacy Settings
│   │   ├── Online Status Visibility
│   │   ├── Activity Visibility
│   │   ├── Performance Visibility
│   │   ├── Leaderboard Visibility
│   │   ├── Monthly Target Visibility
│   │   ├── Attendance Visibility
│   │   ├── Profile Visibility
│   │   ├── Device Visibility
│   │   └── Privacy Preferences
│   │
│   ├── Device Settings
│   │   ├── Registered Device
│   │   ├── Device Name
│   │   ├── Browser Information
│   │   ├── Operating System
│   │   ├── Camera Permission
│   │   ├── QR Scanner Permission
│   │   ├── Barcode Scanner Permission
│   │   ├── GPS Permission
│   │   ├── Notification Permission
│   │   └── Device Sync
│   │
│   ├── Security Preferences
│   │   ├── Change Password
│   │   ├── Two-Factor Authentication
│   │   ├── Biometric Login
│   │   ├── QR Login
│   │   ├── Barcode Authentication
│   │   ├── Active Sessions
│   │   ├── Login Devices
│   │   ├── Logout All Devices
│   │   ├── Security Logs
│   │   └── Account Recovery
│   │
│   ├── Backup & Sync
│   │   ├── Sync Status
│   │   ├── Last Sync
│   │   ├── Auto Sync
│   │   ├── Manual Sync
│   │   ├── Offline Cache
│   │   ├── Clear Cache
│   │   ├── Sync Repair Data
│   │   ├── Sync Notifications
│   │   ├── Sync Preferences
│   │   └── Restore Defaults
│   │
│   ├── Reset Settings
│   │   ├── Reset Dashboard
│   │   ├── Reset Notifications
│   │   ├── Reset Attendance Preferences
│   │   ├── Reset Privacy
│   │   ├── Reset Device Settings
│   │   ├── Reset Security Preferences
│   │   ├── Reset All Settings
│   │   ├── Confirmation Dialog
│   │   └── Restore Factory Preferences
│   │
│   ├── Business Rules
│   │   ├── Settings apply only to the current Technician account
│   │   ├── Company policies override personal preferences
│   │   ├── Attendance rules cannot be disabled
│   │   ├── Security settings follow Owner/Admin policy
│   │   ├── Notification preferences sync across registered devices
│   │   ├── Device permissions require browser approval
│   │   ├── QR/Barcode authentication follows security policy
│   │   ├── Settings changes are logged automatically
│   │   ├── Factory reset does not affect repair records
│   │   └── Only Owner/Admin can modify company-wide shift policies
│   │
│   └── Audit Trail
│       ├── Settings Changed
│       ├── Password Changed
│       ├── 2FA Enabled/Disabled
│       ├── Notification Settings Updated
│       ├── Dashboard Preferences Updated
│       ├── Privacy Changes
│       ├── Device Changes
│       ├── Sync Logs
│       ├── Reset Logs
│       ├── Timestamp
│       ├── User
│       ├── Device
│       ├── Browser
│       ├── IP Address
│       └── Export Audit Logs

└── SHIFT MODULE COMPLETE
