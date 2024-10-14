# VBA脚本

将汇总表按大区经理进行拆分。

```vbscript
'-------------------------------------
' Creation date : 2024/09/10
' Last update   : 2024/09/12
' Author        : F.W.Yue
' Tested on WPS Office 11.1.0.10162
' Description   :用于Excel报表的拆分
'-------------------------------------

Sub FilterAndSaveByManager()
    Dim manager As Variant
    Dim managers As String
    Dim managerList() As String
    Dim ws As Worksheet
    Dim originalFileName As String
    Dim newFilePath As String
    Dim desktopPath As String
    Dim wb As Workbook
    Dim success As Boolean
    Dim searchRowNumber As Long
    Dim fileExists As Boolean

    desktopPath = CreateObject("WScript.Shell").SpecialFolders("Desktop") & "\"
    originalFileName = Replace(ThisWorkbook.Name, "市场部", "")
    managers = InputBox("请输入大区经理的名字，用逗号分隔：", "筛选大区经理", "刘波,胡冰雪")
    managerList = Split(managers, ",")

    For Each manager In managerList
        manager = Trim(manager)
        newFilePath = desktopPath & manager & "大区_" & originalFileName
        ThisWorkbook.SaveCopyAs (newFilePath)
        Set wb = Workbooks.Open(newFilePath)

        For Each ws In wb.Sheets
            If ws.PivotTables.Count = 0 Then
                success = FilterWorksheetByColumn(wb, ws, manager, 1, "大区经理")
                If Not success Then
                    success = FilterWorksheetByColumn(wb, ws, manager, 3, "大区经理")
                End If
            End If
        Next ws

        For Each ws In wb.Sheets
            If ws.PivotTables.Count > 0 Then
                Dim pt As PivotTable
                For Each pt In ws.PivotTables
                    On Error Resume Next
                    pt.PivotCache.Refresh
                    On Error GoTo 0
                Next pt
            End If
        Next ws

        wb.Close SaveChanges:=True
    Next manager
End Sub

Function FilterWorksheetByColumn(wb As Workbook, ws As Worksheet, filterValue As Variant, Optional searchRowNumber As Long = 1, Optional searchStr As String = "大区经理") As Boolean
    Dim searchRow As Range
    Dim targetCol As Range
    Dim lastRowNumber As Integer 
    Dim found As Boolean 
    Dim colNumber As Integer 
    Dim tempWs As Worksheet 
    Dim usedRange As Range 
    Dim targetRange As Range 
    Dim sheetName As String 
    Dim cellToCheck As Range
    Dim currentRow As Range
    Dim rowsToDelete As Range
    Dim numberOfRowsToDelete As Long
    Dim cellValue As Variant
    
    Set rowsToDelete = Nothing
    FilterWorksheetByAddress = False
    If ws.AutoFilterMode Then ws.AutoFilterMode = False
    cellValue = ws.Cells(1, 1).Value
    
    Set searchRow = ws.Rows(searchRowNumber)
    cellValue = searchRow.Cells(1, 1).Value
    
    If IsEmpty(cellValue) Then
        Exit Function
    End If

    Set targetCol = searchRow.Find(What:=searchStr, LookAt:=xlWhole)
    If targetCol Is Nothing Then Exit Function

    colNumber = targetCol.Column

    lastRowNumber = ws.Cells(ws.Rows.Count, 1).End(xlUp).Row
    
     Set cellToCheck = ws.Cells(searchRowNumber + 1, colNumber)
    startRowNumber = IIf(IsEmpty(cellToCheck), searchRowNumber + 1, searchRowNumber)
    
    For i = lastRowNumber To startRowNumber + 1 Step -1
        Set currentRow = ws.Cells(i, colNumber)
        If Not currentRow.Value = filterValue Then
            If rowsToDelete Is Nothing Then
                Set rowsToDelete = currentRow.EntireRow
            Else
                Set rowsToDelete = Union(rowsToDelete, currentRow.EntireRow)
            End If
        End If
    numberOfRowsToDelete = numberOfRowsToDelete + 1
    Next i
    
      If ws.ListObjects.Count > 0 Then
        For Each tbl In ws.ListObjects
            tbl.Unlist
        Next tbl
    End If
    
    If Not rowsToDelete Is Nothing Then
        rowsToDelete.Delete Shift:=xlUp
    End If

End Function

```

