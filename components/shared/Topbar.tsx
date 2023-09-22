import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";


function Topbar() {
  const isUserLoggedIn = true;

  return (
    <nav className='topbar '>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='/logo.svg' alt='logo' width={200} height={80} />
        <p className='text-heading2-bold italic text-primary-500 max-lg:hidden px-80 underline  '>!! Vasudhaiv Kutumbakam !!</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          {/* //clerk tool to check sign in or not-> if sign in then the control goes inside */}
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;