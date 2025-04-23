import { TableCell, TableContainer, TableRow } from "@mui/material";

type Props = {
  [key: string]: {
    [key: string]: string;
  };
};

export const ProjectDetails: React.FC<Props> = ({ details }) => {
  return (
    <div className="flex-1 padding-05rem margin-top-2rem">
      <div className="test-background flex-column center-column">
        <TableContainer>
          <table>
            <tbody>
              {Object.entries(details).map(([point, detail]) => (
                <TableRow key={point}>
                  <TableCell className="border">
                    <h2>{point}</h2>
                    <p className="md-font">{detail}</p>
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
