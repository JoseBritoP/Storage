import { getFiles, getTotalSpaceUsed } from "@/lib/actions/file.actions";
import { getUsageSummary } from "@/lib/utils";
import { Chart } from "@/components/shared/Chart";
import SummaryFileType from "@/components/shared/dashboard/SummaryFileType";
import RecentFiles from "@/components/shared/dashboard/RecentFiles";

const Dashboard = async () => {
  // Parallel requests
  const [files, totalSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getTotalSpaceUsed(),
  ]);

  // Get usage summary
  const usageSummary = getUsageSummary(totalSpace);

  return (
    <div className="dashboard-container">
      <section>
        <Chart used={totalSpace.used} />
        {/* Uploaded file type summaries */}
        <SummaryFileType usageSummary={usageSummary} />
      </section>

      {/* Recent files uploaded */}
      <RecentFiles files={files.documents} />
    </div>
  );
};

export default Dashboard;
