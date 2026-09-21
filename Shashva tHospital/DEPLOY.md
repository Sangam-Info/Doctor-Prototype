# Shashvat Hospital — staff console demo

Single self-contained HTML file. No install, no server, no internet needed to open it.
Double-click `index.html` and it runs. Everything is clickable; data is sample data and resets on refresh.

The hospital name appears identically on every surface — login screen, desktop header, browser tab,
prescription letterhead, bill and receipt, WhatsApp copy, Insights and Setup. Patient UHIDs read `SH-00841`.

**To rebrand for the next hospital**, change these lines near the top of the script inside `index.html`:

```js
const HOSPITAL  = "Shashvat Hospital";
const HOSP_ADDR = "Junagadh, Gujarat";
const HOSP_PH   = "0285 262 0011";
const HOSP_GST  = "24AAXCS1234K1ZP";
const UHID_PFX  = "SH-";
```

Every screen follows automatically. Nothing else needs touching.

---

## Put it online

Keep the folder exactly like this — both files at the same level:

```
shashvat-hospital-demo/
├── index.html
└── wrangler.toml
```

**GitHub + Cloudflare Pages (browser only)** — upload `index.html` to a new private repo, then
Cloudflare → Workers & Pages → Create → Pages → Connect to Git. Framework preset **None**,
build command **empty**, output directory **`/`**. Do not upload `wrangler.toml` for this route.

**Command line instead** — keep `wrangler.toml`, then:

```powershell
cd C:\Users\YourName\Documents\shashvat-hospital-demo
npx wrangler@latest login
npx wrangler@latest deploy
```

---

## Two minutes before you hand over the phone

Open the link in Chrome → menu → **Add to Home screen**. Launch it from the icon instead of the
browser. The address bar disappears and it looks like an installed app, which is what the owner is
judging. Pull-to-refresh is disabled inside the demo, so a stray downward swipe will not reload it
and wipe the bills you just created.

---

## Ten-minute demo script

Open on a phone, hand the phone over, and let them tap. Ask a question, then let them find the answer.

**1. Owner first (30 sec).** *Owner / Admin* → Insights, then Money.
Ask: "Right now, at 11 AM, how much has your counter collected?"
Most owners cannot answer that without phoning reception. This screen is the whole pitch.

**2. Reception (3 min).** Front desk — every row already shows *New case ₹700* or *Follow-up ₹400*,
so the counter cannot charge it wrong. Tap **Mark arrived** and point out the token.

Then Book. Pick Dr Nilesh → choose Jayaben Solanki → **Follow-up ₹400**, because she saw him last time.
Now switch the doctor to Dr Rupa without touching anything else — the same patient becomes
**New case ₹700**, with the reason spelled out. That one tap is the strongest 15 seconds in the demo.

From the patient picker, use **"Not in the list — register a new patient"** to show a walk-in can be
created without leaving the booking screen. Try registering *Rakesh Trivedi, 41* again to trigger the
duplicate warning.

**3. Money screens (2 min).** Billing → **Close counter**. The system knows cash, UPI and card
separately; staff only counts the drawer. Type a wrong figure on purpose to show the short/extra flag.

Then put a ₹800 discount on a bill and try to generate it. It stops for the owner's PIN (demo PIN **1234**).
Switch to Owner → Money: the discount is already there with the staff name and bill number.
Money → **Payouts** for doctor share and month-to-date payable.

**4. The patient booking link (3 min).** Back to the login screen → **Book an appointment** under
"Public link". This is what a patient sees when they tap the link in your WhatsApp status, your
Google listing or a poster at the gate — a web page, not an app, with nothing to download.

Pick Dr Nilesh → the taken slots are already struck off → pick a time → enter **9924571006**
(Priya Dave, already in the system) → OTP **4321**. The page recognises the number, skips the form,
and prices the visit correctly. Confirm, and it issues a booking reference.

Now switch to Reception → Front desk. That booking is already in today's list, tagged **Online**,
with the amount to collect. Say this out loud: *nobody at the desk answered a phone for it.*

Then go back to the booking link and try to take the same slot — it is now struck off. Two people
cannot book the same time.

**5. Doctor (4 min).** Queue → **Call next**. Then Consultation: pull vitals, tick complaints, pick a
diagnosis, add a medicine with dose, advise two tests, finish. Prescription comes out on the letterhead
→ Send on WhatsApp. Show the Gujarati line — this is what wins over the nursing staff.

**6. Close on the patient file.** Any patient → Patient file → visit history and old reports.
Tap **Upload report** and photograph any paper on their desk with the phone camera. It attaches to that
patient and opens from any doctor's login. This lands harder than anything you can say about it.
Ask: "If this patient comes back after two years, how long does it take to find his old file today?"

---

## What to say about the demo itself

- **Records are staff-only.** Patients have no app and no login. The public booking link is a web page
  that can only create an appointment — it can never open a file, report, prescription or bill, even
  for a patient who is already registered. Reports and prescriptions are handed over at the counter.
- The booking link can be switched off in Setup, leaving booking to the desk only.
- Slots are held per doctor, so two doctors can both see patients at 11:00, and a slot taken online
  disappears from the desk's list immediately (and the other way round).
- Bookings are OTP-verified, which is what keeps fake bookings from blocking a doctor's day.
- Consultation charge is decided by the system: new case ₹700, follow-up ₹400, and a change of doctor
  counts as a new case. Both figures are configurable per hospital.
- Discounts above ₹500 need the owner's PIN. The limit and the PIN are configurable.
- Duplicate patients are caught at registration (same mobile, or a close name at a close age), because
  a second file splits the history and charges ₹700 instead of ₹400.
- Doctors, rates, phone number, GSTIN and letterhead in this build are placeholders until Shashvat
  gives you the real ones.
- Modules not in this demo (IPD/beds, pharmacy stock, lab result entry, insurance/TPA, staff attendance
  and payroll) sit on the same login and are quoted separately.

---

Built by **Sangam InfoAnalytics**, Junagadh · 84900 02023 · sangaminfoanalytics.online
