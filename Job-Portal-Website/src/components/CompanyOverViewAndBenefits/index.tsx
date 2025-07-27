import { MapPin, ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import JobBenefitIcons from "../JobBenefitIcons";

export const CompanyOverViewAndBenefits = ({ details }: any) => {
  return (
    <div className="h-[620px] ">
      <Card className="h-full overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Company Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {details?.companyOverview?.description}
          </p>

          <div className=" flex gap-2  justify-left">
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-orange-50 p-2 rounded-full">
                <UserRound className="w-4 h-4 text-orange-500 fill-orange-500 " />
              </div>
              <span>{details?.companyOverview?.size}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="bg-blue-50 p-2 rounded-full">
                <MapPin className="w-4 h-4 text-blue-600 fill-blue-600" />
              </div>
              <span>{details?.companyOverview?.location}</span>
            </div>
          </div>

          <h2 className="font-semibold">Reviews</h2>
          <div className="space-y-5">
            {details?.reviews?.map((review, index) => {
              const isPositive = review.trim().startsWith("✅");
              const isNegative = review.trim().startsWith("❌");
              const cleanedReview = review.replace(/^✅|^❌/, "").trim();

              return (
                <div key={index} className="flex items-start gap-2 text-sm">
                  {isPositive && (
                    <div className="bg-green-50 p-2 rounded-full">
                      <ThumbsUp className="w-4 h-4 text-green-600 fill-green-600 " />
                    </div>
                  )}
                  {isNegative && (
                    <div className="bg-red-50 p-2 rounded-full">
                      <ThumbsDown className="w-4 h-4 text-red-600 fill-red-600" />
                    </div>
                  )}
                  <span style={{ padding: "4px" }}>{cleanedReview}</span>
                </div>
              );
            })}
          </div>

          <div>
            <h2 className="font-semibold pb-5">Benefits & Perks</h2>

            <div className="grid grid-cols-3 gap-4">
              {details?.benefitsAndPerks?.map((benefit, index) => {
                const isLastColumn = (index + 1) % 3 === 0;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center"
                  >
                    <JobBenefitIcons {...benefit} />

                    {!isLastColumn && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gray-300" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyOverViewAndBenefits;
