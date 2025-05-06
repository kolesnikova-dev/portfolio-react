import { TableCell, TableContainer, TableRow } from "@mui/material";
import type { ProjectDetails as Details } from "../../types";

export const ProjectDetails = ({ details }: { details: Details }) => {
  return (
    <div className="flex-1 pd-05rem margin-top-2rem">
      <div className="test-background flex-column center-column">
        <TableContainer>
          <table>
            <tbody>
              {Object.entries(details).map(([point, detail]) => (
                <TableRow key={point}>
                  <TableCell className="border">
                    <h2>{point}</h2>
                    {Array.isArray(detail) ? (
                      <>
                        {detail.map((sentence) => (
                          <p
                            key={sentence.slice(10)}
                            className="margin-block-1rem md-font"
                          >
                            • {sentence}
                          </p>
                        ))}
                      </>
                    ) : (
                      <p className="md-font">{detail}</p>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </div>
    </div>
  );
};
