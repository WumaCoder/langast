SELECT * FROM table1 FETCH FIRST 2 ROWS ONLY;
SELECT * FROM table1 FETCH NEXT ROW ONLY;
SELECT * FROM (VALUES (1, '1'), (2, '2')) FETCH FIRST ROW ONLY;
SELECT * FROM (VALUES (1, '1'), (2, '2')) FETCH FIRST ROW WITH TIES;
SELECT * FROM table1 FETCH FIRST 2 ROWS WITH TIES;
SELECT * FROM table1 FETCH NEXT ROW WITH TIES;
