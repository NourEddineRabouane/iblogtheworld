import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      {/* Logo Icon */}
      <div className="relative">
        {/* Globe Base */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          {/* Longitude Lines */}
          <div className="absolute w-6 h-6 rounded-full border border-primary-foreground/30"></div>
          <div className="absolute w-6 h-6 rounded-full border border-primary-foreground/30 rotate-45"></div>

          {/* Latitude Lines */}
          <div className="absolute w-4 h-4 rounded-full border border-primary-foreground/30"></div>
          <div className="absolute w-2 h-2 rounded-full border border-primary-foreground/30"></div>

          {/* Dot representing the user/blogger */}
          <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full absolute top-1 right-2 shadow-sm"></div>
        </div>

        {/* Pulsing animation ring */}
        <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-primary/30 animate-ping"></div>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-secondary-foreground/30 to-secondary-foreground bg-clip-text text-transparent">
          Iblogtheworld
        </span>
        <span className="text-xs text-muted-foreground -mt-1 font-medium">
          Discover • Share • Inspire
        </span>
      </div>
    </Link>
  );
};

export default Logo;
